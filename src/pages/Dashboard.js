import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const addTask = task => setTasks([...tasks, task]);
  const toggleComplete = id => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
    <div className="dashboard-header">
      <h2>My Tasks</h2>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
    <TaskForm addTask={addTask} />
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    ))}
  </div>

  );
}

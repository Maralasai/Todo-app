import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = () => {
    addTask({
      id: uuid(),
      title,
      description,
      date: new Date().toISOString(),
      deadline,
      priority,
      completed: false
    });
    setTitle('');
    setDescription('');
    setDeadline('');
    setPriority('Medium');
  };

  return (
    <div className="task-form">
    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
    <input type="datetime-local" value={deadline} onChange={e => setDeadline(e.target.value)} />
    <select value={priority} onChange={e => setPriority(e.target.value)}>
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>
    <button onClick={handleSubmit}>Add Task</button>
  </div>
  );
}

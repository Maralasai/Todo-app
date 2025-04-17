export default function TaskItem({ task, toggleComplete, deleteTask }) {
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h4>{task.title} ({task.priority})</h4>
      <p>{task.description}</p>
      <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
      <div className="task-buttons">
        <button className="complete-btn" onClick={() => toggleComplete(task.id)}>✔️</button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑️</button>
      </div>
    </div>
    );
  }
  
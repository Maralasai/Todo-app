import React from 'react';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Due: {task.deadline}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.completed ? 'Done' : 'Pending'}</p>
          <button onClick={() => toggleComplete(task.id)}>Toggle</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

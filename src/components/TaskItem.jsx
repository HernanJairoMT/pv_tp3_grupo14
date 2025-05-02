function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className="task-item">
      <span>• </span>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : 'white' }}>
        {task.text}
      </span>
      <div className="task-buttons">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Realizada' : 'Completar'}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}

export default TaskItem;
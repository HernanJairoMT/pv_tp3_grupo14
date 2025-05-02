function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <div className="task-buttons">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}
  export default TaskItem;
  
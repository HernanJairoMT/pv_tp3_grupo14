function TaskItem({ task, onToggleComplete, onDelete }) {
    return (
      <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </li>
    );
  }
  
  export default TaskItem;
  
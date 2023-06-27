import React from 'react';

function DeleteTaskButton({ taskId, task, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete callback with the task ID and the task object
    onDelete(taskId, task);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteTaskButton;
import React, { useState } from 'react';

function UpdateTaskForm({ taskId, task, onUpdate }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = e => {
    e.preventDefault();

    // Create an updated task object
    const updatedTask = {
      id: taskId,
      title,
      description,
      is_completed: task.is_completed, // Include any other existing properties
    };

    // Call the onUpdate callback with the updated task object
    onUpdate(updatedTask);
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateTaskForm;
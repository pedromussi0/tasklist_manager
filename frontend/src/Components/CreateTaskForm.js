import React, { useState } from 'react';

function CreateTaskForm({ onTaskCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      title,
      description,
    };

    // Call the onTaskCreate callback with the new task object
    onTaskCreate(newTask);

    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
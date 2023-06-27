import React, {useState} from 'react';
import UpdateTaskForm from './UpdateTaskForm';
import DeleteTaskButton from './DeleteTaskButton';

function TaskList({ tasks, onUpdate, onDelete }) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleSelectTask = (taskId) => {
    setSelectedTaskId(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleSelectTask(task.id)}>Select</button>
          {selectedTaskId === task.id && (
            <div>
              <UpdateTaskForm taskId={task.id} task={task} onUpdate={onUpdate} />
              <DeleteTaskButton taskId={task.id} onDelete={onDelete} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
import React, { useEffect, useState } from 'react';
import CreateTaskForm from './Components/CreateTaskForm';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Django API
    fetch('http://localhost:8000/api/task/')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  const handleTaskCreate = newTask => {
    // Make a POST request to the task_create endpoint to create a new task
    fetch('http://localhost:8000/api/task/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        // Update the tasks state with the newly created task
        setTasks([...tasks, data]);
      })
      .catch(error => console.log(error));
  };

  const handleTaskUpdate = (updatedTask) => {
  // Make a PATCH or PUT request to the task_update endpoint to update the task
  fetch(`http://localhost:8000/api/task/${updatedTask.id}/`     , {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  })
    .then(response => response.json())
    .then(data => {
      // Update the tasks state with the updated task
      const updatedTasks = tasks.map(task => {
        if (task.id === updatedTask.id) {
          return { ...task, ...data };
        }
        return task;
      });
      setTasks(updatedTasks);
    })
    .catch(error => console.log(error));
  };

  const handleTaskDelete = (taskId, deletedTask) => {
    // Make a DELETE request to the task_delete endpoint to delete the task
    fetch(`http://localhost:8000/api/task/${taskId}/`     , {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted task from the tasks state
          const updatedTasks = tasks.filter(task => task.id !== taskId);
          setTasks(updatedTasks);
        } else {
          throw new Error('Failed to delete task');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <CreateTaskForm onTaskCreate={handleTaskCreate} />
      <TaskList tasks={tasks} onUpdate={handleTaskUpdate} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
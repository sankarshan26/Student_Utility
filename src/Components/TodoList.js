import React, { useState } from 'react';

function TodoList() {
  const [todoTasks, setTodoTasks] = useState([]); // State to manage Todo tasks
  const [doneTasks, setDoneTasks] = useState([]); // State to manage Done tasks
  const [taskInput, setTaskInput] = useState(''); // State to manage task input

  // Function to add a task
  const addTask = () => {
    if (taskInput) {
      setTodoTasks([...todoTasks, taskInput]);
      setTaskInput('');
    }
  };

  // Function to mark a task as done
  const markAsDone = (index) => {
    const taskToMove = todoTasks[index];
    setTodoTasks(todoTasks.filter((_, i) => i !== index));
    setDoneTasks([...doneTasks, taskToMove]);
  };

  // Function to delete a task from the "Done" list
  const deleteDoneTask = (index) => {
    const newDoneTasks = doneTasks.filter((_, i) => i !== index);
    setDoneTasks(newDoneTasks);
  };

  return (
    <div className="todo-list">
      <div className="columns" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="column" style={{ flex: 1, padding: '20px', border: '3px solid yellow', backgroundColor: '#efe8d8', borderRadius: '5px' }}>
        <h2 className="text-xl font-bold text-gray-800">To Do</h2>
        <br/>

          <div className="input-container" style={{ display: 'flex', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Add a new task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              style={{ flex: 1, padding: '5px' }}
            />
            <button
              onClick={addTask}
              style={{ backgroundColor: '#007bff', color: 'white', padding: '5px 5px', border: 'none', cursor: 'pointer', marginLeft: '8px',borderRadius: '7px' }}
            >
              Add
            </button>
          </div>
          <ul className="task-list" style={{ listStyle: 'none', padding: 0 }}>
            {todoTasks.map((task, index) => (
              <li key={index} style={{ margin: '5px 0' }}>
                {task}{' '}
                <button
                  onClick={() => markAsDone(index)}
                  style={{ backgroundColor: '#007bff', color: 'white', padding: '5px 5px', border: 'none', cursor: 'pointer', marginLeft: '5px', borderRadius: '7px' }}
                >
                  Mark as Done
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column" style={{ flex: 1, padding: '20px', border: '3px solid yellow', backgroundColor: '#efe8d8', borderRadius: '8px' }}>
        <h2 className="text-xl font-bold text-gray-800">Done</h2>

          <ul className="task-list" style={{ listStyle: 'none', padding: 0 }}>
            {doneTasks.map((task, index) => (
              <li key={index} style={{ margin: '5px 0' }}>
                {task}{' '}
                <button
                  onClick={() => deleteDoneTask(index)}
                  style={{ backgroundColor: '#007bff', color: 'white', padding: '5px 5px', border: 'none', cursor: 'pointer', marginLeft: '5px',borderRadius: '7px' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

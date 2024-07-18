import React, { useState } from 'react';

let globalId = 0;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  function createTodo(e) {
    e.preventDefault();
    setTodos((todos) => {
      setTask(' ');
      return [...todos, { todo: task, AssignedId: globalId++ }];
    });
  }

  function removeTask(itemID) {
    setTodos((todos) => todos.filter((item) => item.AssignedId !== itemID));
  }

  return (
    <div>
      <h2>This is a Todo App</h2>
      <form>
        <input
          type="text"
          placeholder="write yout task here!"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={createTodo}>Add task</button>
      </form>
      <ol>
        {todos.map((item, index) => {
          return (
            <div key={item.Id}>
              <li>
                {item.todo} ({item.AssignedId})
                <button onClick={() => removeTask(item.AssignedId)}>
                  Remove Task
                </button>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

// [
//   {
//     todo: 'a',
//     AssignedId: 0,
//   },
//   {
//     todo: 'b',
//     AssignedId: 1,
//   },
// ];

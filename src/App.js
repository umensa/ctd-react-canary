import React from 'react';

const todoList = [
  { id: 1,
    title: 'Project Setup',
  },
  {
    id: 2,
    title: 'React Components and JSX',
  },
  {
    id: 3,
    title: 'Lists in React',
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <hr />

      <ul>
        {todoList.map(function (list){
          return (
            <li key={list.id}>{list.title}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={setNewTodo} />
      <hr />
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = function() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );

  const addTodo = (newTodo) => (
    setTodoList([...todoList, newTodo])
  );

  useEffect( function() {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <hr />

      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;

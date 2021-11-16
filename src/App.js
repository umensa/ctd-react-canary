import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

const App = function() {
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => (
    setTodoList([...todoList, newTodo])
  );

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

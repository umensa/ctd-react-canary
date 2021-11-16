import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => (
  <ul>
    {todoList.map((list) => (
      <TodoListItem key={list.id} todo={list.title} />
    ))}
  </ul>
);    

export default TodoList;

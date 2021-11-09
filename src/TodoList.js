import React from 'react';
import TodoListItem from './TodoListItem';

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

const TodoList = (props) => (
  <ul>
    {todoList.map((list) => (
      <TodoListItem key={list.id} todo={list} />
    ))}
  </ul>
);    

export default TodoList;

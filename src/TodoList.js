import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todoList, onRemoveTodo}) => (
  <ul>
    {todoList.map((list) => (
      <TodoListItem key={list.id} todo={list} onRemoveTodo={onRemoveTodo} />
    ))}
  </ul>
)

export default TodoList

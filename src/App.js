import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const useSemiPersistentState = function() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  )

  useEffect(
    function() {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    },
    [todoList]
  )

  return [todoList, setTodoList]
}

const App = function() {
  const [todoList, setTodoList] = useSemiPersistentState()

  const addTodo = (newTodo) => (
    setTodoList([...todoList, newTodo])
  )

  return (
    <>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      <hr />

      <TodoList todoList={todoList} />
    </>
  )
}

export default App

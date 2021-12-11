import React from 'react'
import InputWithLabel from './InputWithLabel'

const AddTodoForm = function({onAddTodo}) {
  const [todoTitle, setTodoTitle] = React.useState('')

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault()
    setTodoTitle('')
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    })
  }

  return (
    <form onSubmit={handleAddTodo} >
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label="Title" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm;

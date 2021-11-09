import React from 'react';

const AddTodoForm = function() {
  const handleAddTodo = function(event){
    event.preventDefault();
    let todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">Title </label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

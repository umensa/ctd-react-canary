import React from 'react';

const AddTodoForm = function() {
  return (
    <form>
      <label htmlFor="todoTitle">Title </label>
      <input type="text" id="todoTitle"></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

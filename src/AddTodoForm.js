import React from 'react';

const AddTodoForm = function(props) {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodoTitle('');
    props.onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
  };

  return (
    <form onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">Title </label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

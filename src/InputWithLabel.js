import React from 'react'

const InputWithLabel = function({todoTitle, handleTitleChange, label}) {
	return (
		<>
			<label htmlFor="todoTitle">{label} </label>
			  <input
			    type="text"
			    id="todoTitle"
			    name="title"
			    value={todoTitle}
			    onChange={handleTitleChange}
			  />
		</>
	)
}

export default InputWithLabel

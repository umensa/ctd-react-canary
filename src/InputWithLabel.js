import React, { useRef, useEffect } from 'react'

const InputWithLabel = function({todoTitle, handleTitleChange, children}) {
	const inputRef = useRef()

	useEffect(
		function() {
			inputRef.current.focus()
		}
	)

	return (
		<>
			<label htmlFor="todoTitle">{children} </label>
			  <input
			  	ref={inputRef}
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

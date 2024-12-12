import React, {useState} from "react";

function TodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={value}
            onChange={e => setInputValue(e.target.value)} 
             />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;
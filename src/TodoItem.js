import React from "react";

function TodoItems({todo, toggleComplete, removeTodo}) {
    return (
        <div className="todo">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
             />
             <p>{todo.text}</p>
             <button onClick={()  => removeTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
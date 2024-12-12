import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, togglecomplete, removeTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                togglecomplete={togglecomplete}
                removeTodo={removeTodo}
                />  
            ))}
        </ul>
    )
}

export default TodoList;

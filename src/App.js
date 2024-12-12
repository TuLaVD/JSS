import React, {useState} from "react";
import TodoForm from "./ToDoForm";
import TodoList from "./TodoList";

function App() { 
  const [todos, setTodos] = useState([])


  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };  
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } :todo
    ))
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );

  
}

export default App;

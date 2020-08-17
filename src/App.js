import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Tehty</button>
        <button onClick={() => removeTodo(index)}>Poista</button>
      </div>
    </div>
  );
}

function NewItem({ newTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    newTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Lisää uusi tehtävä"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleSubmit}>Lisää</button>
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Tehtävä 1",
      completed: false,
    },
    {
      text: "Tehtävä 2",
      completed: false,
    },
    {
      text: "Tehtävä 3",
      completed: false,
    },
  ]);

  const newTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <NewItem newTodo={newTodo} />
      </div>
    </div>
  );
}
export default App;

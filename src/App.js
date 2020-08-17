import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo">
    <div
      className="todo-texts"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      </div>

      <div>
        <Button variant="contained" color="primary" onClick={() => completeTodo(index)}>Tehty</Button>
        <Button variant="contained" color="secondary"onClick={() => removeTodo(index)}>Poista</Button>
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
    <div className="form">
    <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          placeholder="Lisää uusi tehtävä"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      <Button variant="contained" color="primary" type="submit">Lisää</Button>
    </form>
    </div>
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

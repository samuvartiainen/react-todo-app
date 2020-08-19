import React, { useState } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import checkmark from "./check-mark-icon.svg";
import crossmark from "./cross-mark-icon.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { findByLabelText } from "@testing-library/react";

import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    display: "flex",
  },
  media: {
    height: 100,
  },
}));

function Todo({ todo, index, completeTodo, removeTodo, returnTodo }) {
  return (
    <div
      className="todo"
      style={{
        backgroundColor: todo.completed ? "var(--lightgrey)" : "var(--orange)",
      }}
    >
      <div
        className="todo-texts"
        style={{
          textDecoration: todo.completed ? "line-through" : "",
        }}
      >
        {todo.text}
      </div>
      <div></div>
      <div className="buttons">
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => {
                todo.completed ? returnTodo(index) : completeTodo(index);
              }}
            />
          }
        ></FormControlLabel>

        <div className="crossmark">
          <img
            height="30px"
            src={crossmark}
            onClick={() => removeTodo(index)}
          />
        </div>
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
        <Button
          variant="contained"
          style={{
            color: "var(--orange)",
            backgroundColor: "var(--black)",
          }}
          type="submit"
        >
          Lisää
        </Button>
      </form>
    </div>
  );
}

function App() {
  const classes = useStyles();

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
    newTodos.push(newTodos.splice(index, 1)[0]);
    setTodos(newTodos);
  };

  // return task to uncompleted
  const returnTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    newTodos.unshift(newTodos.splice(index, 1)[0]);
    setTodos(newTodos);
  };
  // remove item from list
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
            returnTodo={returnTodo}
          />
        ))}
        <NewItem newTodo={newTodo} />
      </div>
    </div>
  );
}
export default App;

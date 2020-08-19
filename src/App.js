import React, { useState } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import checkmark from "./check-mark-icon.svg";
import crossmark from "./cross-mark-icon.svg";
import addicon from "./add-button.svg";
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
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "@material-ui/core";

const CheckboxColored = withStyles({
  root: {
    color: "var(--white)",
    "&$checked": {
      color: "var(--black)",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Todo({ todo, index, completeTodo, removeTodo, returnTodo }) {
  const [state, setState] = React.useState({});

  const handleChange = (event, index) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    if (event.target.checked) {
      completeTodo(index);
    } else {
      returnTodo(index);
    }
  };

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
        <FormControlLabel
          control={
            <CheckboxColored
              checked={todo.completed}
              onChange={(e) => handleChange(e, index)}
              // onClick={() => {todo.completed ? returnTodo(index) : completeTodo(index)}}
            />
          }
        ></FormControlLabel>
        {todo.text}
      </div>
      <div></div>
      <div className="buttons">
        <div className="crossmark">
          <img
            height="25vh"
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
    <form onSubmit={handleSubmit}>
      <div className="form">
        <TextField
          type="text"
          fullWidth
          height="125vh"
          className="input"
          placeholder="Lisää uusi tehtävä"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          inputProps={{
            style: { fontSize: 25 },
          }}
        />
        <img
          className="addBtn"
          height="70vh"
          src={addicon}
          onClick={handleSubmit}
        />
      </div>
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
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  // return task to uncompleted
  const returnTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
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

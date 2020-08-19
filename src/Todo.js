import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import crossmark from "./cross-mark-icon.svg";
import "./App.css";
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

export default Todo;

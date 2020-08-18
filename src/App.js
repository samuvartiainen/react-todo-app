import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Todo({ todo, index, completeTodo, removeTodo, returnTodo }) {
  return (
    <div className="todo">
    <div
      className="todo-texts"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      </div>

      <div>
        {todo.completed ?
        <Button
        variant="contained"
      style={{
        color: "var(--orange)",
        backgroundColor: "var(--black)"
      }}
        onClick={() => returnTodo(index)}>Palauta</Button>
        :
        <Button 
      variant="contained"
      style={{
        color: "var(--orange)",
        backgroundColor: "var(--black)"
    }}
      onClick={() => completeTodo(index)}>Tehty</Button>
    }
      
        <Button 
        variant="contained" 
        style={{
          backgroundColor: "var(--darkgrey)"
      }}
        onClick={() => removeTodo(index)}>Poista</Button>
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
      <Button variant="contained"
      style={{
        color: "var(--orange)",
        backgroundColor: "var(--black)"
    }}
      type="submit">Lisää</Button>
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
    newTodos.push(newTodos.splice(index, 1)[0])
    setTodos(newTodos);
  };

  // back to uncompleted task
  const returnTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    newTodos.unshift(newTodos.splice(index, 1)[0])
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <Card className={classes.root}>
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
        </Card>
      </div>
    </div>
  );
}
export default App;

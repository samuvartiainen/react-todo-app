import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo.js";
import NewItem from "./NewItem.js";

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

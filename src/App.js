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
  todos.sort((a, b) => {
    if(a.completed == true && b.completed == false){
      return 1;
    }
    if(a.completed == false && b.completed == true){
      return -1;
    }
    return 0;
  });
  const newTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    array_move(newTodos, index, newTodos.length-1);
    setTodos(newTodos);
  };

  // return task to uncompleted
  const returnTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = false;
    array_move(newTodos, index, 0);
    setTodos(newTodos);
  };
  // remove item from list
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
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

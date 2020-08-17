import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todos, setTodos] = useState([
    {
      text: "1"
    },
    {
      text: "2"
    },
    {
      text: "3"
    }
  ]);


return (
  <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
        />
      ))}
    </div>
  </div>
);
}
export default App;

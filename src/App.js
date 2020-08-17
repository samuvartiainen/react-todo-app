import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function NewItem({ newTodo }){
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    newTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Input</label>
      <input
      type="text"
      className="input"
      value={value}
      onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "1",
      completed: false
    },
    {
      text: "2",
      completed: false
    },
    {
      text: "3",
      completed: false
    }
  ]);

  const newTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

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
      <NewItem newTodo={newTodo} />
    </div>
  </div>
);
}
export default App;

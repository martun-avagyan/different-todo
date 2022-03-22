import { useReducer, useState } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  const onAdd = (text) => {
    setTodos([
      {
        id: Math.random(),
        text: text,
        isCompleted: false,
      },
      ...todos,
    ]);
  };

  const onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const onChange = (newTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <TodoForm onAdd={onAdd} />
      <TodoList onDelete={onDelete} onChange={onChange} todos={todos} />
      <TodoFooter todos={todos} onClearCompleted={onClearCompleted} />
    </div>
  );
}

export default App;

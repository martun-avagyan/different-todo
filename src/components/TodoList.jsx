import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onChange }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            onDelete={onDelete}
            onChange={onChange}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

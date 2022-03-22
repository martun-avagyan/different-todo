import React from "react";

const TodoItem = ({ todo, onChange, onDelete }) => {
  const onCheckHandler = (e) => {
    onChange({
      ...todo,
      isCompleted: e.target.checked,
    });
  };

  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onCheckHandler}
        />
        {todo.text}
        <button onClick={() => onDelete(todo)}>X</button>
      </label>
    </div>
  );
};

export default TodoItem;

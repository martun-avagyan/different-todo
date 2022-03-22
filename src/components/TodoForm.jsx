import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" value={text} onChange={textHandler} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;

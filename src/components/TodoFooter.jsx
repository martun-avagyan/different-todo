import React from "react";

const TodoFooter = ({ todos, onClearCompleted }) => {
  const completedLength = todos.filter((todo) => todo.isCompleted).length;
  return (
    <>
      <span>
        {completedLength} done out of {todos.length}
      </span>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </>
  );
};

export default TodoFooter;

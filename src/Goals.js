import React, { useState } from "react";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const addGoalHandler = () => {
    setGoals([{ input: input, id: Math.random() }, ...goals]);
    setInput("");
  };
  const onDeleteHandler = (id) =>
    setGoals(goals.filter((goal) => id !== goal.id));
  return (
    <div>
      <input onChange={inputHandler} value={input} />
      <button onClick={addGoalHandler}>Add</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.input}{" "}
            <button onClick={() => onDeleteHandler(goal.id)}>x</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;

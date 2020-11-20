import React from "react";
import TodoContainer from "./TodoContainer";

const TodoList = () => {
  const { todos } = React.useContext(TodoContainer.Context);
  return (
    <ul>
      {todos.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
};

export default TodoList;

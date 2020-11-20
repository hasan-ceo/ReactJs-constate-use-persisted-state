import React from "react";

const useTodos = () => {
  const [todos, setTodos] = React.useState([]);
  const [val, setVal] = React.useState("");

  const addTodo = () => {
    setTodos([val, ...todos]);
    setVal("");
  };

  const updateForm = (e) => {
    setVal(e.target.value);
  };

  return {
    todos,
    val,
    addTodo,
    updateForm,
  };
};

export default useTodos;

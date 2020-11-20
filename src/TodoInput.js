import React from "react";
import TodoContainer from "./TodoContainer";

const TodoInput = () => {
  const { val, updateForm, addTodo } = React.useContext(TodoContainer.Context);
  return (
    <div>
      <input value={val} onChange={updateForm} />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};

export default TodoInput;

import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  return (
    <div>
      <h2>My ToDo</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add To Do</button>
    </div>
  );
};

export default memo(Todos);

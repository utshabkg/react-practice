import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((task) => [...task, "New ToDo"]);
  }, [todos]);
  return (
    <>
      <div>
        Count: {count} <button onClick={increment}>+</button>
      </div>
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
};

export default UseCallbackDemo;

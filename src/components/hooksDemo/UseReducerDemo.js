import React, { useReducer } from "react";

const UseReducerDemo = () => {
  const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    } else if (action.type === "DEC") {
      return state - 1;
    } else if (action.type === "MUL") {
      return state * 2;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
    </div>
  );
};

export default UseReducerDemo;

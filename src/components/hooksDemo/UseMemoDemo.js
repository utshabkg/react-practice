import React, { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000000000; i++) {
      console.log("Inside Loop");
      return num;
    }
  };

  const calculation = useMemo(() => expensiveCalculation(count), []); // keep dependency [count] or [name] to run loop repeatedly

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count: {count}</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
    </div>
  );
};

export default UseMemoDemo;

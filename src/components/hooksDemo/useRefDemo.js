import React, { useState, useEffect, useRef } from "react";

const UseRefDemo = () => {
  const [input, setInput] = useState("");
  const prevStat = useRef("");

  useEffect(() => {
    prevStat.current = input;
  }, [input]);

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input value={input} onChange={formHandler} />
      <h4>Previous Stat was: {prevStat.current}</h4>
    </div>
  );
};

export default UseRefDemo;

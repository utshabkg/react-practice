import React, { useState, useEffect, useRef } from "react";

const UseRefDemo = () => {
  const [input, setInput] = useState("");
  const counter = useRef(0);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input value={input} onChange={formHandler} />
      <h4>Application has been rendered {counter.current} times.</h4>
    </div>
  );
};

export default UseRefDemo;

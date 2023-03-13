import React, { useState, useEffect, useRef } from "react";

const UseRefDemo = () => {
  const [input, setInput] = useState("");
  const inputField = useRef();
  // const prevState = useRef("");

  // useEffect(() => {
  //   prevStat.current = input;
  // }, [input]);

  const formHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = () => {
    inputField.current.value = "Utshab";
    inputField.current.focus();
  };
  return (
    <div>
      {/* <input value={input} onChange={formHandler} /> */}
      {/* <h4>Previous Stat was: {prevState.current}</h4> */}
      <input ref={inputField} value={input} onChange={formHandler} />
      <button onClick={clickHandler}>Click Me to Focus inside TextBox</button>
      <button onClick={clickHandler}>Add value = "Utshab"</button>
    </div>
  );
};

export default UseRefDemo;

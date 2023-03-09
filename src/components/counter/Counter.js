import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [num, setNum] = useState(1);
  function increment(i) {
    setNum(num + i);
  }
  function decrement(i) {
    setNum(num - i);
  }

  return (
    <div className="main">
      <h1 className="heading">{num}</h1>
      <div className="buttons">
        <button className="btn" onClick={() => increment(2)}>
          increment
        </button>
        <button className="btn" onClick={() => decrement(1)}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

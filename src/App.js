import "./App.css";
import Header from "./components/Header";
// import Movie from "./components/Movie";
// import movies from "./movie.json";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  function increment(i) {
    setNum(num + i);
  }
  function decrement(i) {
    setNum(num - i);
  }
  return (
    <div className="App">
      <Header />
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
        {/* {movies.map((element, index) => {
          return ( 
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;

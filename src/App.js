import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Counter from "./components/counter/Counter";
import Demo from "./components/useEffectDemo/Demo";
import Movie from "./components/movie/Movie";
import About from "./components/about/About";
import Error from "./components/error/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/employees" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

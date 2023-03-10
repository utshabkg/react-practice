import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Counter from "./components/counter/Counter";
import Demo from "./components/useEffect/Demo";
import Movie from "./components/movie/Movie";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

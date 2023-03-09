import "./App.css";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import Demo from "./components/useEffect/Demo";
import Movie from "./components/movie/Movie";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Demo />
      <Movie />
    </div>
  );
}

export default App;

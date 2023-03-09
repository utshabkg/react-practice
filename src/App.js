import "./App.css";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
// import Movie from "./components/movie/Movie";
// import movies from "./movie.json";


function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      
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
  );
}

export default App;

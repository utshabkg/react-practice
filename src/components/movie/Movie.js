import "./movie.scss";
import movies from "../../movie.json";

const Movie = () => {
  return (
    <div className="container-movie">
      {movies.map((element, index) => {
        return (
          <div key={index} className="movie">
            <img src={element.Poster} alt="" />
            <p>{element.Title}</p>
            <p>Year: {element.Year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;

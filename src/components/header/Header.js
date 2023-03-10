import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/movie"}>
        <h1>Movie</h1>
      </Link>
      <Link to={"/counter"}>
        <h1>Counter</h1>
      </Link>
      <Link to={"/employees"}>
        <h1>Employees</h1>
      </Link>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
    </div>
  );
};

export default Header; //export by default
// export { Header }; // export by object

import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <Link to={"/movie"}>
        <h3>Movie</h3>
      </Link>
      <Link to={"/counter"}>
        <h3>Counter</h3>
      </Link>
      <Link to={"/employees"}>
        <h3>Employees</h3>
      </Link>
      <Link to={"/about"}>
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default Header; //export by default
// export { Header }; // export by object

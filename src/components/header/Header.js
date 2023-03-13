import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/"}>
        <h3>Home</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/movie"}>
        <h3>Movie</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/counter"}>
        <h3>Counter</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/employees"}>
        <h3>Employees</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h3>About</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        <h3>Contact</h3>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/userefdemo"}>
        <h3>useRef Demo</h3>
      </NavLink>
    </div>
  );
};

export default Header; //export by default
// export { Header }; // export by object

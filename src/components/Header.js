import Footer from "./Footer";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <p id="topic">Amazing Header Component</p>
      <Footer />
    </div>
  );
};

export default Header; //export by default
// export { Header }; // export by object

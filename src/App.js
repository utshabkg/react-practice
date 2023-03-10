import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UserDetails from "./components/home/UserDetails";
import Movie from "./components/movie/Movie";
import Counter from "./components/counter/Counter";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Insta from "./components/contact/Insta";
import Mail from "./components/contact/Mail";
import Error from "./components/error/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />} />
          </Route>
          <Route path="/app/:userId" element={<UserDetails />} />

          <Route path="/movie" element={<Movie />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Mail />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UserDetails from "./components/home/UserDetails";
import Movie from "./components/movie/Movie";
import Counter from "./components/counter/Counter";
import Contact from "./components/contact/Contact";
import Insta from "./components/contact/Insta";
import Mail from "./components/contact/Mail";
import Error from "./components/error/Error";
import UseRefDemo from "./components/hooksDemo/UseRefDemo";
import UseReducerDemo from "./components/hooksDemo/UseReducerDemo";
import UseMemoDemo from "./components/hooksDemo/UseMemoDemo";
import UseCallbackDemo from "./components/hooksDemo/UseCallbackDemo";
import Loader from "./components/loader/Loader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId" element={<UserDetails />} />

          <Route path="/movie" element={<Movie />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Mail />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          <Route path="/userefdemo" element={<UseRefDemo />} />
          <Route path="/usereducerdemo" element={<UseReducerDemo />} />
          <Route path="/usememodemo" element={<UseMemoDemo />} />
          <Route path="/usecallbackdemo" element={<UseCallbackDemo />} />
          <Route path="/loaderdemo" element={<Loader />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

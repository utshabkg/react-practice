import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to={"insta"}>
        <h5>Contact via Insta</h5>
      </Link>
      <Link to={"mail"}>
        <h5>Contact via Mail</h5>
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;

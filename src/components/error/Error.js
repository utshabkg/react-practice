import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div>404. Page not Found!</div>
      <button onClick={() => navigate(-1)}>Go to Previous Page</button>
    </Fragment>
  );
};

export default Error;

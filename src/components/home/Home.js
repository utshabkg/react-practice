import "./home.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const response = await get.json();
      setData(response);
    }

    getData();
  }, [state]);
  return (
    <div className="demo">
      <h2>Demo Employee List [Showing {state}]</h2>
      <div className="data" style={{ color: "yellow" }}>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
      </div>
      {data.map((element, index) => {
        return (
          <Link to={`/${element.id}`}>
            <div key={index} className="data">
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          </Link>
        );
      })}
      <button onClick={() => setState(state + 2)} className="btn-fetch">
        Fetch 2 more entries
      </button>
    </div>
  );
};

export default Home;

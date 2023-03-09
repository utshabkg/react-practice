import "./demo.scss";
import { useState, useEffect } from "react";

const Demo = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const response = await get.json();
      setData(response);
      console.log(response);
    }

    getData();
  }, [state]);
  return (
    <div className="demo">
      <h2>Demo Employee List [Showing {state}]</h2>
      {data.map((element, index) => {
        return (
          <div key={index} className="data">
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
      <button onClick={() => setState(state + 2)} className="btn-fetch">
        Fetch 2 more entries
      </button>
    </div>
  );
};

export default Demo;

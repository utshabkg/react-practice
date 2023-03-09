import { useState, useEffect } from "react";

const Demo = () => {
  const [state, setState] = useState(10);
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
    <div>
      <button onClick={() => setState(state + 5)}>Click Me {state}</button>
    </div>
  );
};

export default Demo;

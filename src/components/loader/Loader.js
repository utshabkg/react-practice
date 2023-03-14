import "./Loader.scss";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const get = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=500&idStarts=1001"
      );
      const response = await get.json();
      setData(response);
      setLoading(false);
      toast.success("Data Fetch Successful");
    }

    getData();
  }, []);
  return (
    <div className="main">
      {loading ? (
        <ThreeCircles color="red" height={40} />
      ) : (
        data.map((e, i) => {
          return <p>{e.email}</p>;
        })
      )}
    </div>
  );
};

export default Loader;

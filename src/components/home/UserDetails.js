import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const reset = () => {
    setSearchParams({});
  };

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=$1&idStarts=${userId}`
      );
      const response = await get.json();
      setData(response[0]);
    }

    getData();
  }, []); // no dependency
  return (
    <div>
      <h4>{data.id}</h4>
      <img src={data.imageUrl}></img>
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UserDetails;

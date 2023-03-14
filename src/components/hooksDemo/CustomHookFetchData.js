import { useEffect, useState } from "react";

const CustomHookFetchData = (url, initialState) => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(url);
      const response = await get.json();
      setData(response);
    }

    getData();
  }, [state]);

  return [data];
};

export default CustomHookFetchData;

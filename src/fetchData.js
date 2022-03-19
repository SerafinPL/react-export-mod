import { useState, useCallback } from "react";

const useFetchData = () => {
  const [data, setData] = useState(undefined);

  const fetchData = useCallback((content) => {
  
    fetch(`https://postman-echo.com/post`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(content),
    })
      .then((res) => {
        // console.log(res);

        return res;
      })
      .then((res) => {
        // console.log(res);
        setData(res.ok)
        return res;
      })
      .catch((err) => {
        console.log(err);

       
      });
  }, []);

  return {
    fetchData: fetchData,
    data: data,
  };
};

export default useFetchData;

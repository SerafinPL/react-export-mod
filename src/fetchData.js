import { useState, useCallback } from "react";

const useFetchData = () => {
  const [data, setData] = useState(undefined);

  const fetchData = useCallback((content) => {
  
    fetch(`https://postman-echo.com/post`, {
      method: "POST",
       
      headers: {
        
         "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(content),
    })
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.ok)
        return data;
      })
      .catch((err) => {
        console.log(err);
        setData(err)
       
      });
  }, []);

  return {
    fetchData: fetchData,
    data: data,
  };
};

export default useFetchData;

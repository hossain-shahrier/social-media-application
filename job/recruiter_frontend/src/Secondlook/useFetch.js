import { useEffect } from "react";

export const useFetch = (url, job) => {
  const getData = async () => {
    const response = await fetch(url + "joblist");
    const data = await response.json();
    job(data);
  };

  useEffect(() => {
    getData();
  }, []);
};

export const createJob = (url, data) => {
  fetch(url + "createJob", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

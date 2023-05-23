import { useState, useEffect } from "react";
import axios from "axios";

export const UseFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setIserror] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "a2f4e2997dmshe56fb3331f601fap1c8890jsnb2add64d2420",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsloading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setIsloading(false);
    } catch (error) {
      setIserror(error);
      alert("There is an error.");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsloading(true);
    fetchData();
  };

  return { isLoading, error, data, refetch };
};

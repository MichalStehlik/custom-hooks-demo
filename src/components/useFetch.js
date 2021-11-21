import { useState, useEffect } from 'react'
import axios from "axios";

export const UNKNOWN_ERROR = "UNKNOWN";

const useFetch = (url, accessToken) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true)
      axios.get(url, 
        {headers: { "Content-Type": "application/json" }})
      .then(response => { 
          setData(response.data);
          setError(null); 
      })
      .catch(error => {
        setData(null);
        if (error.response) {
            setError({status: error.response.status, text: error.response.statusText})
        } else {
            setError({status: 0, text: UNKNOWN_ERROR});
        }
      })
      .then(()=>{
          setIsLoading(false)
      })
    };
    fetchData(url);
  },[url, accessToken])
  return { data, isLoading, error }
}

export default useFetch
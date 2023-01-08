import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState({});
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setApiData(data)
          setIsLoading(false);
        })
    }, [url]);
    
    return { apiData, isLoading };
  };

  export default useFetch;
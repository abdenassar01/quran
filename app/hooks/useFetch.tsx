import { useState, useEffect } from "react";

const useFetch = (url: string, options: any) => {

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const doFetch = async () => {

      setLoading(true);

      try {

        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    
    doFetch();
  }, []);

return { response, error, loading };

};
export default useFetch;
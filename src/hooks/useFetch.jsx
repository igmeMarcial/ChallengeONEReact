import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          let err = new Error("Error en la petición");
          err.status = response.status || "00";
          err.statusText = response.statusText || "Ocurrio un error";
          throw err;
        }
        const json = await response.json();

        if (!signal.aborted) {
          setData(json);
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}

import { useState, useEffect } from 'react';

interface State<T> {
  data?: T;
  error?: Error | any;
}

export const useFetch = <T extends unknown>(url: string, options?: RequestInit): State<T> => {
  const [response, setResponse] = useState<State<T>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        console.log(res)
        setResponse({ data: json });
      } catch (error) {
        setResponse({ error });
      }
    };

    fetchData();
  }, [url]);

  return response;
};

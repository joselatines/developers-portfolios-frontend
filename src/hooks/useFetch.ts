import { useState, useEffect, useCallback } from 'react';

interface State<T> {
  data?: T;
  error?: Error | any;
}

interface UseFetchResult<T> extends State<T> {
  refetch: () => void;
}

export const useFetch = <T extends unknown>(url: string, options?: RequestInit): UseFetchResult<T> => {
  const [response, setResponse] = useState<State<T>>({});

  // Function to fetch data from the specified URL
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse({ data: json });
    } catch (error) {
      setResponse({ error });
    }
  }, [url, options]);

  // Effect to fetch data when the component mounts or when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to manually trigger a refetch
  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  // Return the result including data, error, and refetch function
  return { ...response, refetch };
};

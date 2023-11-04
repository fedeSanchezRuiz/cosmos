import { useEffect, useState } from 'react';

export function useFetch(fetchUrl, errorMessage) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(errorMessage);
        }
        setFetchedData(data);
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
    };
    fetchData();
  }, [fetchUrl, errorMessage]);

  return {
    isFetching,
    fetchedData,
    error,
  };
}

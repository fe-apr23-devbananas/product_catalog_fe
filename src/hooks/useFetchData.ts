import { useEffect, useState } from 'react';

//* for each page, just need to change <TData> products/phones/accessories/tablets

export const useFetchData = <TData>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        'http://localhost:3000/product_catalog_fe/apiTEST/phones.json'
      );
      const data = await response.json();
      setData(data as TData[]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, data };
};
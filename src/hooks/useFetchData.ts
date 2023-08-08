import { useEffect, useState } from 'react';
// import { Phone } from '../types/Phone';
import { ProductDetails } from '../types/ProductDetails';

//* for each page, just need to change <TData> products/phones/accessories/tablets

export const useFetchData = <TData>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://devbananas-products-api.onrender.com/products'
      );
      const data = await response.json();
      setData(data as TData[]);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  console.log(data);
  return { isLoading, data };
};

export const getItemById = async (phoneSlug: string, categoryName: string) => {
  try {
    const response = await fetch(
      `https://devbananas-products-api.onrender.com/products/${phoneSlug}?category=${categoryName}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch phone data.');
    }
    const data = await response.json();
    console.log(data);
    return data as ProductDetails;
  } catch (error) {
    console.error('Error fetching phone data:', error);
    return;
  }
};

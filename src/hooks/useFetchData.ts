import { useEffect, useState } from 'react';
import { ProductDetails } from '../types/ProductDetails';

const BASE_URL = 'https://devbananas-products-api.onrender.com';

//* for each page, just need to change <TData> products/phones/accessories/tablets

export const useFetchData = <TData>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      setData(data as TData[]);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  // console.log(data);
  return { isLoading, data };
};

export const getItemById = async (phoneSlug: string, categoryName: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${categoryName}/${phoneSlug}`);
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

export const useGetRecommendedItems = (
  productType: string,
  itemSlug: string
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/${productType}/${itemSlug}/recommended`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  return { isLoading, data };
};

export const useGetItemById = (productType: string, itemSlug: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${productType}/${itemSlug}`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    })(); //IIFE
  }, []);

  return { isLoading, data };
};

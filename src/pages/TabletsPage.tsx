/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';

//TEST!!!!!!

export const TabletsPage: FC = () => {
  const [data, setData] = useState('');
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://devbananas-products-api.onrender.com/products/apple-iphone-7-32gb-black?category=phones'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData('1323');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return <EmptyProducts />;
};

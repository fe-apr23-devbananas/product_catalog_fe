import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';

export const PhonesPage: FC = () => {
  const { isLoading, data: phones } = useFetchData<Product>();
  //КОСТИЛЬ
  const newPhones = phones.map((phone) => {
    const {
      id,
      category,
      itemId,
      name,
      fullPrice,
      price,
      screen,
      capacity,
      color,
      ram,
      year,
      image
    } = phone;

    return {
      id,
      category,
      itemId,
      name,
      fullPrice,
      price,
      screen,
      capacity,
      color,
      ram,
      year,
      image
    };
  });
  //КІНЕЦЬ КОСТИЛЮ
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <Catalog products={newPhones} />}
    </div>
  );
};

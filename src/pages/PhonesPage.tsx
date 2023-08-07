import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';

export const PhonesPage: FC = () => {
  const { isLoading, data: phones } = useFetchData<Product>();

  return (
    <div>{isLoading ? <p>Loading...</p> : <Catalog products={phones} />}</div>
  );
};

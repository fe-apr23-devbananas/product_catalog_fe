import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';
import { Loader } from '../components/Loader/';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';

export const PhonesPage: FC = () => {
  const { isLoading, data: phones } = useFetchData<Product>();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : phones.length ? (
        <Catalog products={phones} />
      ) : (
        <EmptyProducts />
      )}
    </div>
  );
};

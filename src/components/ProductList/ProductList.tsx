import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { SelectSection } from '../SelectSection/SelectSection';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../Catalog';

export const ProductList = () => {
  const query = useQuery();
  const { data: phones } = useFetchData<Product>();

  console.log(query.get('hello'));

  return (
    <>
      <div>
        <SelectSection />
      </div>
      <Catalog products={phones} />
      {query}
    </>
  );
};

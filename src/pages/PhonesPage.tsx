import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';
import { Loader } from '../components/Loader/';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';

export const PhonesPage: FC = () => {
  const { isLoading, count, data: phones } = useFetchData<Product>();

  return (
    <React.Fragment>
      <div className="breadcrumbs">there will be breadcrumbs</div>
      <div className="catalog__title">Mobile phones</div>
      <div className="catalog__total-models">{count} model(s)</div>
      <div>
        {isLoading ? (
          <Loader />
        ) : phones.length ? (
          <Catalog products={phones} />
        ) : (
          <EmptyProducts />
        )}
      </div>
    </React.Fragment>
  );
};

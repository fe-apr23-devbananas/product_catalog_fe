import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';

export const PhonesPage: FC = () => {
  const { isLoading, data: phones } = useFetchData<Product>();

  return (
    <React.Fragment>
      <div className="breadcrumbs">there will be breadcrumbs</div>
      <div className="catalog__title">Mobile phones</div>
      <div className="catalog__total-models">{phones.length} model(s)</div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Catalog products={phones} />
        )}
      </div>
    </React.Fragment>
  );
};

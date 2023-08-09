import React from 'react';
import { Catalog } from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';
import { Loader } from '../components/Loader/';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PhonesPage: React.FC = () => {
  const { isLoading, data: phones } = useFetchData<Product>();

  return (
    <React.Fragment>
      <Breadcrumbs>
        <Typography>Phones</Typography>
      </Breadcrumbs>
      <div className="catalog__title">Mobile phones</div>
      <div className="catalog__total-models">{phones.length} model(s)</div>
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

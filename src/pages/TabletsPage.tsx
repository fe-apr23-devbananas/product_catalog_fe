/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';
import { ProductList } from '../components/ProductList/ProductList';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

//TEST!!!!!!

export const TabletsPage: FC = () => {
  return (
    <>
      <Breadcrumbs>
        <Typography>Tablets</Typography>
      </Breadcrumbs>
      <ProductList />;
      <EmptyProducts />
    </>
  );
};

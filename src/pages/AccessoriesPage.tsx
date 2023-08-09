import React, { FC } from 'react';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AccessoriesPage: FC = () => {
  return (
    <>
      <Breadcrumbs>
        <Typography>Accessories</Typography>
      </Breadcrumbs>
      <EmptyProducts />
    </>
  );
};

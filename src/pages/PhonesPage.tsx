import React, { useState } from 'react';
import {
  Catalog,
  OptionType,
  sortByOptions,
  perPageOptions
} from '../components/Catalog';
import { useFetchData } from '../hooks/useFetchData';
import { Product } from '../types/Product';
import { Loader } from '../components/Loader/';
import { EmptyProducts } from '../components/EmptyProducts/EmptyProducts';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useSearchParams } from 'react-router-dom';

const defaultQuantity = perPageOptions[1];
const defaultSort = sortByOptions[0];

export const PhonesPage: React.FC = () => {
  const [, setCurrentPage] = useState('1');
  const [selectedSort, setSelectedSort] = useState<OptionType | null>(
    defaultSort
  );
  const [selectedQuantity, setSelectedQuantity] = useState<OptionType | null>(
    defaultQuantity
  );
  const [queryParams, setQueryParams] = useSearchParams();

  const { isLoading, count, data: phones } = useFetchData<Product>();

  async function sortChangeHandler(
    newSort: { value: string; label: string } | null
  ) {
    if (newSort !== null) {
      setSelectedSort(newSort);
      queryParams.set('sort', newSort.value);
      setQueryParams(queryParams);
    }
  }

  async function perPageChangeHandler(newPerPage: OptionType | null) {
    if (newPerPage !== null) {
      setSelectedQuantity(newPerPage);
      queryParams.set('quantity', newPerPage.value);
      setQueryParams(queryParams);
      setCurrentPage('1');
    }
  }

  return (
    <React.Fragment>
      <Breadcrumbs>
        <Typography>Phones</Typography>
      </Breadcrumbs>
      <div>
        {isLoading ? (
          <Loader />
        ) : phones.length ? (
          <Catalog
            count={count}
            products={phones}
            sortChangeHandler={sortChangeHandler}
            perPageChangeHandler={perPageChangeHandler}
            selectedPerPage={selectedQuantity}
            selectedSortBy={selectedSort}
          />
        ) : (
          <EmptyProducts />
        )}
      </div>
    </React.Fragment>
  );
};

import React, { useMemo, useState } from 'react';
import { SelectSection } from '../SelectSection/SelectSection';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../Catalog';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';
// import { QueryParams } from '../../types/QueryParams';

const defaultQuery = {
  limit: '8',
  offset: '0',
  sortBy: 'itemId'
};

export const ProductList = () => {
  const [query, setQuery] = useSearchParams();
  const [queryParams, setQueryParams] = useState({
    limit: query.get('limit') || defaultQuery.limit,
    offset: query.get('offset') || defaultQuery.offset,
    sortBy: query.get('sortBy') || defaultQuery.sortBy
  });

  const queryString = useMemo(() => {
    let newQueryString = '?';

    (Object.keys(queryParams) as (keyof typeof queryParams)[]).forEach(
      (key, index) => {
        const ampersand = index !== 0 ? '&' : '';
        newQueryString += `${ampersand}${key}=${queryParams[key]}`;
      }
    );

    return newQueryString;
  }, [queryParams]);

  const { isLoading, data: phones } = useFetchData<Product>(
    'phones',
    queryString
  );

  const handler = () => {
    setQuery();
    setQueryParams({
      limit: '10',
      offset: '1',
      sortBy: 'name'
    });
  };

  return (
    <>
      <div>
        <SelectSection />
      </div>
      {isLoading ? <Loader /> : <Catalog products={phones} />}
      <button onClick={handler}>x</button>
    </>
  );
};

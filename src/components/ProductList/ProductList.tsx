import React, { useMemo } from 'react';
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

  const queryParams = useMemo(() => {
    const params = {
      limit: query.get('limit') || defaultQuery.limit,
      offset: query.get('offset') || defaultQuery.offset,
      sortBy: query.get('sortBy') || defaultQuery.sortBy
    };

    return params;
  }, [query]);

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

  const {
    isLoading,
    count,
    data: phones
  } = useFetchData<Product>('phones', queryString);

  const numberOfPages = count / +queryParams.limit;

  const numberOfPagesArray = Array.from({ length: numberOfPages }, (_, i) => i);

  const handler = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const page = target.getAttribute('data-value') || '1';
    const offset = `${Number(queryParams.limit) * Number(page)}`;

    setQuery({
      offset
    });
  };

  return (
    <>
      <div>
        <SelectSection />
      </div>
      {isLoading ? <Loader /> : <Catalog products={phones} />}
      {numberOfPagesArray.map((page) => (
        <button onClick={handler} data-value={`${page}`} key={page}>
          {page + 1}
        </button>
      ))}
      ;
    </>
  );
};

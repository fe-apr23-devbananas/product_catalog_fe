import React from 'react';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
// import { useProductsContext }
import { getNumbers } from '../../helpers/getNumbers';
import { Icon, IconType } from '../Icon';
import { SearchLink } from '../SearchLink';
import './Pagination.scss';

interface Page {
  page: number;
  type: IconType;
}

export const Pagination: FC = () => {
  const [pages, setPages] = useState<number[]>([]);

  const [searchParams] = useSearchParams();
  // ! [TODO]
  // temporary solution
  const total = 20;
  const limit = 10;
  // const { total, limit } = {useProductsContext()};

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setPages(getNumbers(total, limit));
  }, [total, limit]);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= pages.length;

  const previousPage: Page = isFirstPage
    ? { page: currentPage, type: 'arrow-left-disabled' }
    : { page: currentPage - 1, type: 'arrow-left' };

  const nextPage: Page = isLastPage
    ? { page: currentPage, type: 'arrow-right-disabled' }
    : { page: currentPage + 1, type: 'arrow-right' };

  return (
    <section className="Pagination">
      <SearchLink params={{ page: `${previousPage.page}` }}>
        <Icon size={32} type={previousPage.type} />
      </SearchLink>

      <ul className="Pagination__list">
        {pages.map((page) => (
          <li key={page}>
            <SearchLink
              className={classNames('Pagination__item', {
                'Pagination__item--selected': page === currentPage
              })}
              params={{ page: `${page}` }}
            >
              {page}
            </SearchLink>
          </li>
        ))}
      </ul>

      <SearchLink params={{ page: `${nextPage.page}` }}>
        <Icon size={32} type={nextPage.type} />
      </SearchLink>
    </section>
  );
};

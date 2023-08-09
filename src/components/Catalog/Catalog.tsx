import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
import { Product } from '../../types/Product';
import Select, { SingleValue } from 'react-select';
import { colorStyles } from '../../helpers/colorStyles';

export type OptionType = {
  value: string;
  label: string;
};

export const sortByOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' }
];

export const perPageOptions = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '12', label: '12' },
  { value: '16', label: '16' }
];

interface Props {
  products: Product[];
  selectedSortBy: OptionType | null;
  selectedPerPage: OptionType | null;
  count: number;
  sortChangeHandler: CallableFunction;
  perPageChangeHandler: CallableFunction;
}

export const Catalog: React.FC<Props> = ({
  products,
  selectedSortBy,
  selectedPerPage,
  count,
  sortChangeHandler,
  perPageChangeHandler
}) => {
  return (
    <>
      <div className="catalog">
        <div className="catalog__title">Mobile phones</div>
        <div className="catalog__total-models">{count} model(s)</div>
        <div className="catalog__filters">
          <div className="catalog__sort">
            <p className="catalog__sort--name">Sort by</p>
            <Select
              placeholder={selectedSortBy}
              value={selectedSortBy}
              onChange={(newValue: SingleValue<OptionType>) =>
                sortChangeHandler(newValue)
              }
              isMulti={false}
              options={sortByOptions}
              styles={colorStyles}
            />
          </div>
          <div className="catalog__sort">
            <p className="catalog__sort--name">Items on page</p>
            <Select
              placeholder={selectedPerPage}
              value={selectedPerPage}
              onChange={(newValue: SingleValue<OptionType>) =>
                perPageChangeHandler(newValue)
              }
              isMulti={false}
              options={perPageOptions}
              styles={colorStyles}
            />
          </div>
        </div>
      </div>
      <div className="catalog__grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

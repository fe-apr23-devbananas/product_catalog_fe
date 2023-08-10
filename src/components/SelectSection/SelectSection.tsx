import React, { FC } from 'react';
import Select, { SingleValue } from 'react-select';
import './SelectSection.scss';
import { colorStyles } from '../../helpers/colorStyles';

export type OptionType = {
  value: string;
  label: string;
};

export const sortByOptions = [
  { value: 'year', label: 'year' },
  { value: 'name', label: 'name' },
  { value: 'price', label: 'price' }
];

export const perPageOptions = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '12', label: '12' },
  { value: '16', label: '16' }
];

interface Props {
  selectedSortBy: OptionType | null;
  selectedPerPage: OptionType | null;
  sortChangeHandler: CallableFunction;
  perPageChangeHandler: CallableFunction;
}

export const SelectSection: FC<Props> = ({
  selectedSortBy,
  selectedPerPage,
  sortChangeHandler,
  perPageChangeHandler
}) => {
  return (
    <>
      <div className="select">
        <div className="select__filters">
          <div className="select__sort">
            <p className="select__sort--name">Sort by</p>
            <Select
              value={selectedSortBy}
              onChange={(newValue: SingleValue<OptionType>) => {
                sortChangeHandler(newValue?.value);
              }}
              isMulti={false}
              options={sortByOptions}
              styles={colorStyles}
            />
          </div>
          <div className="select__sort">
            <p className="select__sort--name">Items on page</p>
            <Select
              value={selectedPerPage}
              onChange={(newValue: SingleValue<OptionType>) => {
                perPageChangeHandler(newValue?.value);
              }}
              isMulti={false}
              options={perPageOptions}
              styles={colorStyles}
            />
          </div>
        </div>
      </div>
    </>
  );
};

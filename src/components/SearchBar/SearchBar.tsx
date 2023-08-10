import React, { useState, useCallback } from 'react';
import './SearchBar.scss';
import debounce from 'lodash/debounce';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: products } = useFetchData<Product>('products', searchQuery);

  const debouncedApplyQuery = useCallback(
    debounce((query: string) => {
      setSearchQuery(`?search=${searchTerm.trim().split(' ').join(',')}`);
      setShowDropdown(query.length > 0);
    }, 1500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedApplyQuery(event.target.value);
  };

  const handleOnBLur = () => {
    setShowDropdown(false);
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onBlur={handleOnBLur}
      />

      {showDropdown && searchTerm.length > 0 && (
        <ul className="search__results">
          {products.map((product, index) => (
            <li key={index} className="search__result">
              {product.name}
            </li>
          ))}
        </ul>
      )}

      {showDropdown && products.length === 0 && (
        <ul className="search__results">
          <li className="search__no-results" data-visible="true">
            No matching results
          </li>
        </ul>
      )}
    </div>
  );
};

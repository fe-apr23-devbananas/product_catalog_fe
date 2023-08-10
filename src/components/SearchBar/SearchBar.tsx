import React, { useState, useCallback } from 'react';
import './SearchBar.scss';
import debounce from 'lodash/debounce';

const products = ['Product 1', 'Product 2', 'Product 3'];

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const debouncedApplyQuery = useCallback(
    debounce((query: string) => {
      const filtered = products.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(query.length > 0);
    }, 500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedApplyQuery(event.target.value);
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />

      {showDropdown && searchTerm.length > 0 && (
        <ul className="search__results">
          {filteredProducts.map((product, index) => (
            <li key={index} className="search__result">
              {product}
            </li>
          ))}
        </ul>
      )}

      {showDropdown && filteredProducts.length === 0 && (
        <ul className="search__results">
          <li className="search__no-results" data-visible="true">
            No matching results
          </li>
        </ul>
      )}
    </div>
  );
};

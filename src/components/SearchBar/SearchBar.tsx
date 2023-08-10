import React, { useState } from 'react';
import './SearchBar.scss';
// import debounce from 'lodash/debounce';

const products = ['Product 1', 'Product 2', 'Product 3'];

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search__bar">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {searchTerm.length > 0 && (
        <ul className="search__results">
          {filteredProducts.map((product, index) => (
            <li key={index} className="search__result">
              {product}
            </li>
          ))}
        </ul>
      )}

      {filteredProducts.length === 0 && (
        <ul className="search__results">
          <li className="search__no-results" data-visible="true">
            No matching results
          </li>
        </ul>
      )}
    </div>
  );
};

import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
import { Product } from '../../types/Product';

interface Props {
  products: Product[];
}

export const Catalog: React.FC<Props> = ({ products }) => {
  return (
    <div className="container">
      <div className="catalog-grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

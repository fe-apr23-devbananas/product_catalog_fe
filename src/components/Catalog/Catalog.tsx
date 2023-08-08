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
      <div className="breadcrumbs">there will be breadcrumbs</div>
      <div className="catalog__title">Mobile phones</div>
      <div className="catalog__total-models">{products.length} models</div>
      <div className="catalog__grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

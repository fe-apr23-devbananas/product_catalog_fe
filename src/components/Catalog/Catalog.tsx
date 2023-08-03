import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
// import { Phone } from '../../types/Types';

// interface Props {
//   phones: Phone[];
// }

export const Catalog: React.FC = () => {
  return (
    <div className="container">
      <div className="catalog-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {phones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))} */}
      </div>
    </div>
  );
};

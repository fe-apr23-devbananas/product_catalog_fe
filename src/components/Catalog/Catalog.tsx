import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
import { Phone } from '../../types/Types';

// interface Props {
//   phones: Phone[];
// }

//TEMPORARY
const phone: Phone = {
  id: 1,
  category: 'n',
  phoneId: 'ph',
  itemId: 'item1',
  name: 'Phone',
  fullPrice: 122,
  price: 100,
  screen: '5`5',
  capacity: '1000gb',
  color: 'Mr.White',
  ram: '16gb',
  year: 1990,
  image: '/sdf'
};

export const Catalog: React.FC = () => {
  return (
    <div className="container">
      <div className="catalog-grid">
        <Card product={phone} />
        <Card product={phone} />
        <Card product={phone} />
        <Card product={phone} />
        {/* {phones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))} */}
      </div>
    </div>
  );
};

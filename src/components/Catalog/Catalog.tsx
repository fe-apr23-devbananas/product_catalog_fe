import React from 'react';
import { Card } from '../Card/Card';
import './Catalog.scss';
import { Phone } from '../../types/Phone';

interface Props {
  phones: Phone[]; // Receive the phones prop
}

export const Catalog: React.FC<Props> = ({ phones }) => {
  return (
    <div className="container">
      <div className="catalog-grid">
        {/* Map through the phones array and render each phone as a Card */}
        {phones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
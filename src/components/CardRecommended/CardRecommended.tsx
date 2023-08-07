import React, { useRef } from 'react';
import './CardRecommended.scss';
import { Card } from '../Card';
import { Product } from '../../types/Product';
// import { Phone } from '../../types/Phone';
import './phones.json';

/* eslint-disable */
interface Props {
  title: string;
  phones: Product[];
}

export const CardRecommended: React.FC<Props> = ({ title, phones }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handlePrevClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 250;
    }
  };

  const handleNextClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="recommended">
      <div className="recommended__top">
        <h3 className="recommended__title">{title}</h3>

        <div className="recommended__slider">
          <button className="recommended__button" onClick={handlePrevClick}>
            <span
              className="
                recommended__button-icon
                recommended__button-icon--left"
            ></span>
          </button>
          <button className="recommended__button" onClick={handleNextClick}>
            <span
              className="
                recommended__button-icon
                recommended__button-icon--right"
            ></span>
          </button>
        </div>
      </div>

      <div className="recommended__content" ref={listRef}>
        <div className="recommended__scroll-wrapper">
          {phones.map((phone) => (
            <Card key={phone.id} product={phone} />
          ))}
        </div>
      </div>
    </div>
  );
};

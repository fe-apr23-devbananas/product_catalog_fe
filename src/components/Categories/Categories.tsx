import React from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import './Categories.scss';
import catImgPhone from '../../assets/icons/PhonesImage.png';
import catImgTablet from '../../assets/icons/TabletsImage.png';
import catImgAccessories from '../../assets/icons/AccessoriesImage.png';
import { useFetchData } from '../../hooks/useFetchData';
import { ProductDetails } from '../../types/ProductDetails';

export const Categories: React.FC = () => {
  const { data: phones } = useFetchData<ProductDetails>();

  return (
    <>
      <div className="category">
        <div className="container">
          <div className="category__title">Shop by category</div>

          <div className="category__content">
            <CategoryCard
              path="/phones"
              img={catImgPhone}
              title="Mobile phones"
              quantity={phones.length}
            />
            <CategoryCard
              path="/tablets"
              img={catImgTablet}
              title="Tablets"
              quantity={0}
            />
            <CategoryCard
              path="/accessories"
              img={catImgAccessories}
              title="Accessories"
              quantity={0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

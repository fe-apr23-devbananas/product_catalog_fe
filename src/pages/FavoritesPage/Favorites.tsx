import React, { FC } from 'react';
import './Favorites.scss';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../../components/Catalog';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectFavorites } from '../../features/favorites/favoritesSlice';

export const FavoritesPage: FC = () => {
  const { data: phones } = useFetchData<Product>();

  const favoriteItems = useAppSelector(selectFavorites);

  const filteredItems = phones.filter((phone) =>
    favoriteItems.some((item) => item.id === phone.itemId)
  );

  return (
    // change to favorites BEM
    // grid layout ask and implement
    <div className="favorites">
      <a href="#" className="favorites__link">
        Back
      </a>

      <h1 className="favorites__title">Favorites</h1>

      <p className="favorites__quantity">{filteredItems.length} models</p>

      <div className="favorites__wrapper">
        <Catalog products={filteredItems} />
      </div>
    </div>
  );
};

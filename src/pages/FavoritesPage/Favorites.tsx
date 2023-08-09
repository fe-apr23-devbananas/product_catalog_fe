import React, { FC } from 'react';
import './Favorites.scss';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../../components/Catalog';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectFavorites } from '../../features/favorites/favoritesSlice';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import emptyFav from '../../assets/icons/emptyFav.png';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavoritesPage: FC = () => {
  const { data: phones } = useFetchData<Product>();

  const favoriteItems = useAppSelector(selectFavorites);

  const filteredItems = phones.filter((phone) =>
    favoriteItems.some((item) => item.id === phone.itemId)
  );
  return (
    <>
      <Breadcrumbs>
        <Typography>Favorites</Typography>
      </Breadcrumbs>

      {filteredItems.length ? (
        <div className="favorites">
          {/* <a href="#" className="favorites__link">
            Back
          </a> */}

          <h1 className="favorites__title">Favorites</h1>
          <p className="favorites__quantity">
            {filteredItems.length === 1
              ? `${filteredItems.length} item`
              : `${filteredItems.length} items`}
          </p>

          <div className="favorites__wrapper">
            <Catalog products={filteredItems} />
          </div>
        </div>
      ) : (
        <div className={cn('empty__container')}>
          <img src={emptyFav} alt="Empty Favorites" className="image" />
          <h2 className={cn('empty__container--text', 'empty__title')}>
            {'Nothing here yet :('}
          </h2>
          <h2 className={cn('empty__container_bottom--text')}>
            Let&apos;s find your favorites
          </h2>
          <Link to="/" className={cn('empty__container--button')}>
            FIND FAVORITES!
          </Link>
        </div>
      )}
    </>
  );
};

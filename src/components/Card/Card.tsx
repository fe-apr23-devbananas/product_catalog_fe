import React, { FC } from 'react';
import './Card.scss';
import { Buttons } from '../Buttons/Buttons';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addItem, deleteItem, selectCart } from '../../features/cart/cartSlice';
import {
  addFav,
  deleteFav,
  selectFavorites
} from '../../features/favorites/favoritesSlice';
import { FavoritesItem } from '../../types/FavoritesItem';
import { CartItem } from '../../types/CartItem';

interface Props {
  product: Product;
}

export const Card: FC<Props> = ({ product }) => {
  const cartItems = useAppSelector(selectCart);
  const cartItem = cartItems.find((obj: CartItem) => obj.id === product.itemId);
  const dispath = useAppDispatch();

  const changeButtonCartHandler = () => {
    if (cartItem) {
      dispath(deleteItem(product.itemId));
    } else {
      dispath(addItem(product.itemId));
    }
  };

  const favItems = useAppSelector(selectFavorites);
  const favItem = favItems.find(
    (obj: FavoritesItem) => obj.id === product.itemId
  );

  const changeButtonFavHandler = () => {
    if (favItem) {
      dispath(deleteFav(product.itemId));
    } else {
      dispath(addFav(product.itemId));
    }
  };

  return (
    <article className="card">
      <a className="card__top" href="#">
        <img
          className="card__photo"
          // We should change it later \/
          src="https://raw.githubusercontent.com/fe-oct22-wonder-devs/product_catalog_imgs/main/img/phones/apple-iphone-11/yellow/00.jpg"
          alt="wdwdw"
        />
        <h3 className="card__title">{product.name}</h3>
        <div className="card__price">
          <p className="card__price-actual">{product.price}</p>
          <p className="card__price-full">${product.fullPrice}</p>
        </div>
      </a>
      <div className="card__line"></div>
      <ul className="card__descriptions">
        <li className="card__description">
          <p className="card__description-left">Screen</p>
          <p className="card__description-right">{product.screen}</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">Capacity</p>
          <p className="card__description-right">{product.capacity}</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">RAM</p>
          <p className="card__description-right">{product.ram}</p>
        </li>
      </ul>

      <Buttons
        onChangeCartHandler={changeButtonCartHandler}
        onChangeFavHandler={changeButtonFavHandler}
        cartItem={cartItem}
        favItem={favItem}
      />
    </article>
  );
};

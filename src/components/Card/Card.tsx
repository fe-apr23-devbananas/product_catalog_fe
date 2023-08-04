import React, { FC } from 'react';
import './Card.scss';
import { Buttons } from '../Buttons/Buttons';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addItem, selectCart } from '../../features/cart/cartSlice';

interface Props {
  product: Product;
}

const API_URL = 'https://devbananas-products-api.onrender.com/';

export const Card: FC<Props> = ({ product }) => {
  const items = useAppSelector(selectCart);
  const item = items.find((obj) => obj.id === product.itemId);
  const dispath = useAppDispatch();

  return (
    <article className="card">
      <a className="card__top" href="#">
        <img
          className="card__photo"
          src={`${API_URL}${product.image}`}
          alt={product.name}
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
      <button
        onClick={() => {
          dispath(addItem(product.itemId));
        }}
        disabled={item ? true : false}
      >
        click
      </button>
      <Buttons />
    </article>
  );
};

import React, { FC, useState } from 'react';
import './CartItem.scss';
import { Product } from '../../types/Product';
import { deleteItem } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

interface Props {
  item: Product;
}

export const CartItem: FC<Props> = ({ item }) => {
  const [amount, setAmount] = useState(1);

  const API_URL = 'https://devbananas-products-api.onrender.com/';
  const totalPrice = item.price * amount;
  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(deleteItem(item.itemId));
  };

  const buttonDecreaseHandler = () => {
    setAmount(prev => prev - 1);
  };

  const buttonIncreaseHandler = () => {
    setAmount(prev => prev + 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button 
          className="cart-item__delete"
          onClick={removeItemHandler}
        ></button>
        <img
          className="cart-item__image"
          src={`${API_URL}${item.image}`}
          alt={item.name}
        />
        <div className="cart-item__title">{item.name}</div>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__amount-info">
          <button 
            className="cart-item__button"
            onClick={buttonDecreaseHandler}
            disabled={amount <= 1}
          >
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--decrease"
            ></span>
          </button>
          <span className="cart-item__amount">{amount}</span>
          <button 
            className="cart-item__button"
            onClick={buttonIncreaseHandler}
          >
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--increase"
            ></span>
          </button>
        </div>

        <h4 className="cart-item__price">{totalPrice}</h4>
      </div>
    </div>
  );
};

import React from 'react';
import { useState } from 'react';
import './CartPage.scss';
import { CartItem } from '../../components/CartItem';
import { ModalWindow } from '../../components/ModalWindow';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectCart } from '../../features/cart/cartSlice';
import { Product } from '../../types/Product';
import { useFetchData } from '../../hooks/useFetchData';

export const CartPage = () => {
  const [isModal, setIsModal] = useState(false);
  const { data: phones } = useFetchData<Product>();

  const cartItems = useAppSelector(selectCart);
  const totalAmount = cartItems.length;

  const filteredItems = phones.filter(phone => 
    cartItems.some(item => item.id === phone.itemId)
  );

  return (
    <div className="cart">
      <a href="#" className="cart__link">
        Back
      </a>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__wrapper">
        <div className="cart__items">
          <div className="cart__item">
            {filteredItems.map(item => (
              <CartItem 
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="cart__total">
          <h3 className="cart__price">$14546</h3>
          <span className="cart__amount">Total for {totalAmount} item(s)</span>
          <button className="cart__button" onClick={() => setIsModal(true)}>
            Checkout
          </button>
        </div>
      </div>

      {isModal && <ModalWindow />}
    </div>
  );
};

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ModalWindow.scss';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { clearCart } from '../../features/cart/cartSlice';

export const ModalWindow = () => {
  const [isModal, setIsModal] = useState(true);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setIsModal(false);
    dispatch(clearCart());
  };

  return (
    <div className={cn('modal', { 'is-active': isModal })}>
      <div className="modal__content">
        <div className="modal__message">Thank&#39;s for shopping!</div>

        <NavLink onClick={closeModal} to="/">
          <button className="modal__button">Back to Store</button>
        </NavLink>
      </div>
    </div>
  );
};

/* eslint-disable indent */
import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Fav from '../../../assets/icons/Favourites.svg';
import Cart from '../../../assets/icons/shoppingCart.svg';
import Burger from '../../../assets/icons/burgerMenu.svg';
import Close from '../../../assets/icons/Close.svg';
//FIX INDENT
type Props = {
  type: string;
};

const prepareLink = (type: string) => {
  switch (type) {
    case 'fav':
      return ['/fav', Fav];

    case 'burger-menu':
      return ['/burger-menu', Burger];

    case 'close':
      return ['/close', Close];

    default:
      return ['/cart', Cart];
  }
};

export const HeaderButton: React.FC<Props> = ({ type }) => {
  const linkData = prepareLink(type);

  return (
    <NavLink
      to={linkData[0]}
      className={({ isActive }) =>
        cn(
          'header__button',
          { 'header__button--active': isActive },
          { 'header__button--burger-menu': type === 'burger-menu' },
          { 'header__button--fav': type === 'fav' },
          { 'header__button--cart': type === 'cart' }
        )
      }
    >
      <img src={linkData[1]} alt="button" className="header__button--image" />
    </NavLink>
  );
};

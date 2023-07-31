import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Fav from '../../../images/headerImages/Favourites.svg';
import Cart from '../../../images/headerImages/shoppingCart.svg';
import Burger from '../../../images/headerImages/burgerMenu.svg';
import Close from '../../../images/headerImages/Close.svg';

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

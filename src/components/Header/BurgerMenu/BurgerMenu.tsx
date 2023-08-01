import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderButton } from '../HeaderButton';
import { MainNavigation } from '../MainNavigation';

interface Props {
  handleBurgerMenuToggle: () => void;
}

export const BurgerMenu: React.FC<Props> = () => {
  return (
    <aside className="burgerMenu">
      <div className="burgerMenu__top">
        <Link to="./" className="burgerMenu__logo">
          <img
            className="burgerMenu__logo--image"
            src="images/headerImages/logo.svg"
            alt="NiceGadgets logo"
          />
        </Link>

        <MainNavigation />

        <div className="burgerMenu__icons">
          <HeaderButton type="fav" />
          <HeaderButton type="cart" />
          <HeaderButton type="burger-menu" />
          <HeaderButton type="close" />
        </div>
      </div>
    </aside>
  );
};

import React, { useState } from 'react';
import './Header.scss';
import { HeaderButton } from './HeaderButton';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import Logo from '../../images/headerImages/Logo.svg';

export const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <header className="header">
        {isBurgerMenuOpen ? (
          <BurgerMenu handleBurgerMenuToggle={handleBurgerMenuToggle} />
        ) : (
          <div className="header__top">
            <Link to="./" className="header__logo">
              <img
                className="header__logo--image"
                src={Logo}
                alt="NiceGadgets logo"
              />
            </Link>

            <MainNavigation />

            <div className="header__icons">
              <HeaderButton type="fav" />
              <HeaderButton type="cart" />
              <HeaderButton type="burger-menu" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React from 'react';
import { PageNavLink } from '../PageNavLink';

const navigationItems = [
  { to: '/', text: 'Home' },
  { to: '/Phones', text: 'Phones' },
  { to: '/Tablets', text: 'Tablets' },
  { to: '/Accessories', text: 'Accessories' }
];

export const MainNavigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navigationItems.map((item) => (
          <li className="nav__item" key={item.to}>
            <PageNavLink to={item.to} text={item.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

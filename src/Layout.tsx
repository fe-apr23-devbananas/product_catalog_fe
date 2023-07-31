import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
);

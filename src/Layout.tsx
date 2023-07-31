import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => (
  <>
    <header>Header</header>
    <Outlet />
    <footer>footer</footer>
  </>
);

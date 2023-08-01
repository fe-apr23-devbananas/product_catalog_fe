import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
    {/* <footer>footer</footer> */}
  </>
);

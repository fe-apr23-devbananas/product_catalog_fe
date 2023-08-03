import React, { FC } from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Layout: FC = () => (
  <>
    <Header />
    <main className="page">
      <div className="page__container"> 
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

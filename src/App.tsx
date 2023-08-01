import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage, PhonesPage, TabletsPage, AccessoriesPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';
import { NotFoundRedirect } from './pages/NotFoundPage/NotFoundRedirect';
import { FavoritesPage } from './pages/Favorites';

export const App = () => {
  return (
    <div className={'App'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </div>
  );
};

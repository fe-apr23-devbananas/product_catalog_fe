import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage, PhonesPage, TabletsPage, AccessoriesPage } from './pages';

export const App = () => {
  return (
    <div className={'App'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="tablets" element={<AccessoriesPage />} />
          <Route path="*" element={<div> Not Found </div>} />
        </Route>
      </Routes>
    </div>
  );
};

import React, { FC } from 'react';
import { HomeSlider } from '../components/HomeSlider';
import { Categories } from '../components/Categories/Categories';

export const HomePage: FC = () => {
  return (
    <>
      <HomeSlider />
      <Categories />
    </>
  );
};

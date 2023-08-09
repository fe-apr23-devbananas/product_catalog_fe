import React from 'react';
import { HomeSlider } from '../components/HomeSlider';
import { ProductCarousel } from '../components/ProductCarousel';
import { useGetSpecial } from '../hooks/useFetchData';
import { Categories } from '../components/Categories/Categories';
import { Loader } from '../components/Loader';

export const HomePage: React.FC = () => {
  const { isLoading: isLoadingNewest, data: newest } = useGetSpecial('new');
  const { isLoading: isLoadingdiscounts, data: discounts } =
    useGetSpecial('discounts');

  return (
    <main>
      <HomeSlider />
      {isLoadingNewest ? (
        <Loader />
      ) : (
        <ProductCarousel title="Brand new models" products={newest} />
      )}
      <Categories />
      {isLoadingdiscounts ? (
        <Loader />
      ) : (
        <ProductCarousel title="Hot prices" products={discounts} />
      )}
    </main>
  );
};

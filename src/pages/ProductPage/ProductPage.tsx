import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import '../../components/Card/Card.scss';
import './ProductSlider.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
import Slider from 'react-slick';
import { Buttons } from '../../components/Buttons/Buttons';
import { ProductDetails } from '../../types/ProductDetails';
import { Loader } from '../../components/Loader';
import { About } from '../../components/About';
import { getSpecsFromProductData } from '../../helpers/getSpecsFromProductData';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { ProductCarousel } from '../../components/ProductCarousel';
import { useGetRecommendedItems } from '../../hooks/useFetchData';
import { Typography } from '@mui/material';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const ProductItem: React.FC = () => {
  const { phoneSlug } = useParams();
  const [currentPhone, setCurrentPhone] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const { isLoading: isLoadingRecommendations, data: recommendedItems } =
    useGetRecommendedItems('phones', phoneSlug as string);

  const location = useLocation();
  const categoryName = location.pathname.split('/')[1];

  const loadItem = (phoneSlug: string | undefined) => {
    setIsLoading(true);
    fetch(
      `https://devbananas-products-api.onrender.com/${categoryName}/${phoneSlug}`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((loadedItem) => {
        if (loadedItem) {
          console.log(loadedItem);
          setCurrentPhone(loadedItem);
          setImages(loadedItem.images);
          setSelectedCapacity(loadedItem.capacity);
          setSelectedColor(loadedItem.color);
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadItem(phoneSlug);
  }, [phoneSlug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(currentPhone);

  const handleColorButtonClick = (color: string) => {
    setSelectedColor(color);
    const newPhoneSlug = [currentPhone?.namespaceId, selectedCapacity, color]
      .join('-')
      .toLowerCase();

    loadItem(newPhoneSlug);
  };

  const handleCapacityButtonClick = (capacity: string) => {
    setSelectedCapacity(capacity);
    const newPhoneSlug = [currentPhone?.namespaceId, capacity, selectedColor]
      .join('-')
      .toLowerCase();

    loadItem(newPhoneSlug);
  };

  const hostName = 'https://devbananas-products-api.onrender.com/';

  const settings = {
    customPaging(i: number) {
      return (
        <img
          src={`${hostName}${images[i]}`}
          alt="img"
          className="slick-image"
        />
      );
    },
    dots: true,
    dotsClass: 'slick-dots-for-small-img',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    initialSlide: 0
  };

  if (isLoading || !currentPhone) {
    return (
      <div className="product">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs>
        <Link to={`/${categoryName}`}>
          <Typography className="product__category" color="text.primary">
            {categoryName.substring(0, 1).toUpperCase()}
            {categoryName.substring(1, categoryName.length)}
          </Typography>
        </Link>
        {currentPhone ? (
          <Typography className="product__name">{currentPhone.name}</Typography>
        ) : (
          ' '
        )}
      </Breadcrumbs>
      <a href="/phones#/phones" className="favorites__link">
        Back
      </a>
      <div className="product">
        <h2 className="product__title">{currentPhone.name}</h2>
        <div className="grid">
          <div className="grid__item--tablet--1-7 grid__item--desktop--1-12 slider">
            <Slider {...settings}>
              {images.map((image) => (
                <img
                  src={`${hostName}${image}`}
                  alt={image}
                  className="product__main-image"
                  key={image}
                />
              ))}
            </Slider>
          </div>

          <div className="product__actions grid__item--tablet--8-12 grid__item--desktop--14-20">
            <section className="product__colors">
              <p className="product__colors-title">Available colors</p>
              <div className="product__colors-buttons">
                {currentPhone?.colorsAvailable.map((color) => (
                  <button
                    className={cn('product__colors-selector', {
                      'product__colors-selector--is-active':
                        selectedColor === color
                    })}
                    key={color}
                    data-color={color}
                    style={{
                      backgroundColor: color
                    }}
                    onClick={() => handleColorButtonClick(color)}
                  />
                ))}
              </div>
            </section>

            <div className="product__line"></div>

            <section className="product__capacity">
              <p className="product__capacity-title">Select capacity</p>
              {currentPhone.capacityAvailable.map((capacity) => (
                <button
                  type="button"
                  className={cn('product__capacity-button', {
                    'product__capacity-button--is-active':
                      selectedCapacity === capacity
                  })}
                  key={capacity}
                  onClick={() => handleCapacityButtonClick(capacity)}
                >
                  {capacity}
                </button>
              ))}
            </section>

            <div className="product__line"></div>

            <section className="product__price">
              <h2 className="product__price-actual">
                ${currentPhone.priceDiscount}
              </h2>
              <p className="product__price-full">
                ${currentPhone.priceRegular}
              </p>
            </section>

            <section className="product__buy">
              <Buttons id={currentPhone.id} />
            </section>

            <div className="product__short-specs">
              <ul className="card__descriptions">
                <li className="card__description">
                  <p className="card__description-left">Screen</p>
                  <p className="card__description-right">
                    {currentPhone.screen}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">Resolution</p>
                  <p className="card__description-right">
                    {currentPhone.resolution}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">Capacity</p>
                  <p className="card__description-right">
                    {currentPhone.capacity}
                  </p>
                </li>
                <li className="card__description">
                  <p className="card__description-left">RAM</p>
                  <p className="card__description-right">{currentPhone.ram}</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <section className='product__id grid__item--desktop--23-24'>ID: 802390</section> */}
        </div>

        <div className="grid">
          <div className="grid__item--tablet--1-12 grid__item--desktop--1-12">
            {<About product={currentPhone} />}
          </div>

          <div className="grid__item--tablet--1-12 grid__item--desktop--14-24">
            {<ProductTechSpecs specs={getSpecsFromProductData(currentPhone)} />}
          </div>
          <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
            {isLoadingRecommendations ? (
              <Loader />
            ) : (
              <ProductCarousel
                title="You may also like"
                products={recommendedItems}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

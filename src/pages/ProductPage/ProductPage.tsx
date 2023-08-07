import React, { useState } from 'react';
import './ProductPage.scss';
import '../../components/Card/Card.scss';
import './ProductSlider.scss';
// import { useLocation, useParams } from 'react-router-dom';
// import { getItemById } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import cn from 'classnames';
import Slider from 'react-slick';
import image1 from '../../assets/productImages/image1.png';
import image2 from '../../assets/productImages/image2.png';
import image3 from '../../assets/productImages/image3.png';
import image4 from '../../assets/productImages/image4.png';
import image5 from '../../assets/productImages/image5.png';
import { Buttons } from '../../components/Buttons/Buttons';

const examplePhone: Product = {
  id: 1,
  name: 'Apple iPhone 7 32GB Black',
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  fullPrice: 400,
  price: 375,
  screen: '4.7\' IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  resolution: '2688x1242',
  image: 'img/phones/apple-iphone-7/black/00.webp'
};

const images = [
  {
    id: 1,
    src: image1,
    alt: 'Image 1'
  },

  {
    id: 2,
    src: image2,
    alt: 'Image 2'
  },

  {
    id: 3,
    src: image3,
    alt: 'Image 3'
  },

  {
    id: 4,
    src: image4,
    alt: 'Image 4'
  },
  {
    id: 5,
    src: image5,
    alt: 'Image 5'
  }
];

export const ProductItem: React.FC = () => {
  // const { itemId } = useParams();
  // const [currentPhone, setCurrentPhone] = useState<Phone | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [, setImages] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');

  // const location = useLocation();
  // const categoryName = location.pathname.split('/')[1];

  // const loadItem = async (phoneId: string | undefined) => {
  //   setIsLoading(true);
  //   if (phoneId) {
  //     const loadedItem = await getItemById(phoneId, categoryName);

  //     if (loadedItem) {
  //       setCurrentPhone(loadedItem[0]);
  //       setImages(loadedItem[0].images);
  //       setActualCapacity(loadedItem[0].capacity);
  //       setActualColor(loadedItem[0].color);
  //     } else {
  //       throw new Error('Phone data not found.');
  //     }
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   loadItem(itemId);
  // }, [itemId]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  const handleColorButtonClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityButtonClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const settings = {
    customPaging(i: number) {
      return (
        <img src={images[i].src} alt={images[i].alt} className="slick-image" />
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

  const colors = ['#FFFF00', '#F5F5DC', '#A52A2A'];

  const capacities = ['64gb', '256gb', '512gb'];

  return (
    <div className="product">
      <h2 className="product__title">{examplePhone.name}</h2>
      <div className="grid">
        <div className="grid__item--tablet--1-7 grid__item--desktop--1-12 slider">
          <Slider {...settings}>
            {images.map((image) => (
              <img
                src={image.src}
                alt={image.alt}
                className="product__main-image"
                key={image.id}
              />
            ))}
          </Slider>
        </div>

        <div className="product__actions grid__item--tablet--8-12 grid__item--desktop--14-20">
          <section className="product__colors">
            <p className="product__colors-title">Available colors</p>
            <div className="product__colors-buttons">
              {colors.map((color) => (
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
            {capacities.map((capacity) => (
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
            <h2 className="product__price-actual">${examplePhone.price}</h2>
            <p className="product__price-full">${examplePhone.fullPrice}</p>
          </section>

          <section className="product__buy">
            <Buttons id={examplePhone.itemId} />
          </section>

          <ul className="card__descriptions">
            <li className="card__description">
              <p className="card__description-left">Screen</p>
              <p className="card__description-right">{examplePhone.screen}</p>
            </li>
            <li className="card__description">
              <p className="card__description-left">Resolution</p>
              <p className="card__description-right">
                {examplePhone.resolution}
              </p>
            </li>
            <li className="card__description">
              <p className="card__description-left">Capacity</p>
              <p className="card__description-right">{examplePhone.capacity}</p>
            </li>
            <li className="card__description">
              <p className="card__description-left">RAM</p>
              <p className="card__description-right">{examplePhone.ram}</p>
            </li>
          </ul>
        </div>
        {/* <section className='product__id grid__item--desktop--23-24'>ID: 802390</section> */}
      </div>
    </div>
  );
};

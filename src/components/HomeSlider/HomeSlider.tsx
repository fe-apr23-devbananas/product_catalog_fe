import React from 'react';
import './HomeSlider.scss';
import Banner1 from '../../assets/banner.png';
import Slider from 'react-slick';

export const HomeSlider: React.FC = () => {
  const imgIds = [1, 2, 3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
          marginTop: 18,
          marginRight: 14
        }}
      />
    )
  };

  return (
    <div className="slider__wrapper">
      <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>
      <Slider {...settings} className="slider">
        {imgIds.map((item) => (
          <div key={item} className="slider__banner">
            <img src={Banner1} alt="iPhone14Pro" className="slider__main-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

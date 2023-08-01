import React, { FC } from 'react';
import { Buttons } from '../Buttons/Buttons';

export const Card: FC = () => {
  return (
    <article className="card">
      <a className="card__top" href="#">
        <img
          className="card__photo"
          // We should change it later \/
          src="https://raw.githubusercontent.com/fe-oct22-wonder-devs/product_catalog_imgs/main/img/phones/apple-iphone-11/yellow/00.jpg"
          alt="wdwdw"
        />
        <h3 className="card__title">
          Apple iPhone 14 Pro 128GB Silver <br /> (MQ023)
        </h3>
        <div className="card__price">
          <p className="card__price-actual">$999</p>
          {/* <p className='card__price-full'>$932</p> */}
        </div>
      </a>
      <div className="card__line"></div>
      <ul className="card__descriptions">
        <li className="card__description">
          <p className="card__description-left">Screen</p>
          <p className="card__description-right">6.1” OLED</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">Capacity</p>
          <p className="card__description-right">128 GB</p>
        </li>
        <li className="card__description">
          <p className="card__description-left">RAM</p>
          <p className="card__description-right">6 GB</p>
        </li>
      </ul>
      <Buttons />
    </article>
  );
};

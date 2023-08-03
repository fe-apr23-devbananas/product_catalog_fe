import React from 'react';
import './CartItem.scss';

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button className="cart-item__delete"></button>
        <img
          className="cart-item__image"
          src="https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/41/4118010/Smartfon-APPLE-14-Pro-Gwiezdna-czern-1.jpg"
          alt="Apple iPhone 15 Super-puper-max"
        />
        <div className="cart-item__title">Apple iPhone 15 Super-puper-max</div>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__amount-info">
          <button className="cart-item__button">
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--decrease"
            ></span>
          </button>
          <span className="cart-item__amount">1</span>
          <button className="cart-item__button">
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--increase"
            ></span>
          </button>
        </div>

        <h4 className="cart-item__price">$1234</h4>
      </div>
    </div>
  );
};

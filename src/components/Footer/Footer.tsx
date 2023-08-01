import React from 'react';
import './footer.scss';
import logo from '../../assets/icons/Logo.svg';
import arrow from '../../assets/icons/arrow.svg';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img src={logo} alt="Nice gadgets" className='logo-img' />
        <div className='footer__link'>
          <a 
            href='https://github.com/fe-apr23-devbananas/product_catalog_fe' 
            className='footer__nav-link'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
          <a 
            href='https://gmail.com' 
            className='footer__nav-link'
            target='_blank'
            rel='noreferrer'
          >
            Contacts
          </a>
          <a 
            href='#' 
            className='footer__nav-link'
            target='_blank'
            rel='noreferrer'
          >
            Rights
          </a>
        </div>
        <div className='footer__button-box'>
          <div className='footer__button-text'>
            Back to top
          </div>
          <button className='footer__button'></button>
          <div className='footer__icon'>
            <img src={arrow} alt="arrow" className='arrow-img' />
          </div>
        </div>
      </div>
    </footer>
  );
};
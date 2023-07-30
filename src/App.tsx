import React from 'react';
import './App.css';
import * as image from './img/123.png';

export const App = () => {
  return (
    <div className="App">
      <img src={image} alt="" />
    </div>
  );
};

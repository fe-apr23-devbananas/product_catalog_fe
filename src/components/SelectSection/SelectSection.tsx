import React from 'react';

export const SelectSection = () => {
  return (
    <>
      <select name="sortBY" id="sort">
        <option value="1">name</option>
        <option value="2">id</option>
      </select>
      <select name="number" id="sort">
        <option value="1">8</option>
        <option value="2">16</option>
      </select>
    </>
  );
};

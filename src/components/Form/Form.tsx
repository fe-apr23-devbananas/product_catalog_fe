import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import cn from 'classnames';
import './Form.scss';

export const Form: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const clearForm = () => {
    setFormData({
      name: '',
      password: ''
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    clearForm();
  };

  return (
    <div className="form">
      <h2 className="form__title">Sign in to NICE &#128076; GADGETS</h2>

      <form className="form__form" onSubmit={handleSubmit}>
        <label className="form__label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
            className={cn('form__input')}
          />
        </label>
        <label className="form__label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={cn('form__input')}
            required
          />
        </label>
        <button className="form__button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

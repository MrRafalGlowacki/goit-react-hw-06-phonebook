import React from 'react';
import PropTypes from 'prop-types';
import css from './AddPhone.module.css';

export const AddPhone = ({ onChange, number }) => {
  return (
    <>
      <label htmlFor="number" className={css.number}>
        Number
      </label>
      <input
        onChange={onChange}
        autoComplete="off"
        type="tel"
        name="number"
        placeholder="Enter number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </>
  );
};

AddPhone.propTypes = {
  onChange: PropTypes.func,
  number: PropTypes.string,
};

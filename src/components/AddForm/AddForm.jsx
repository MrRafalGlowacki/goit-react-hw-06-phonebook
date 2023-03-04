import React from 'react';
import PropTypes from 'prop-types';
import css from './AddForm.module.css';
import { AddName } from './AddName/AddName';
import { AddPhone } from './AddPhone/AddPhone';

export const AddForm = ({ onChange, onSubmit, name, number }) => {

  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <form className={css.form} onSubmit={onSubmit}>
        <AddName onChange={onChange} name={name} />
        <AddPhone onChange={onChange} number={number} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

AddForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

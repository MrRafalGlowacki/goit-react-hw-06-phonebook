import React from 'react';
// import PropTypes from 'prop-types';
import css from './AddName.module.css';

export const AddName = ({ onChange, name })=> {
 // useReducer
 
    return (
      <>
        <label htmlFor="name" className={css.name}>
          Name
        </label>
        <input
          onChange={onChange}
          autoComplete="off"
          placeholder="Enter Name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  
}

// AddName.propTypes = {
//   onChange: PropTypes.func,
//   name: PropTypes.string,
// };

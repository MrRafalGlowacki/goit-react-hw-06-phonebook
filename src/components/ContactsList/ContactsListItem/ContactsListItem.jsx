import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';

export class ContactsListItem extends Component {
  componentWillUnmount() {
    this.props.onUnmount(this.props.name);
  }
  render() {
    const { id, name, number, onContactRemove } = this.props;

    return (
      <li key={id} className={css.item}>
        <span className={css.name}>
          {name}: {number}
        </span>{' '}
        <button
          type="button"
          className={css.button}
          onClick={() => onContactRemove(id)}
        >
          X
        </button>
      </li>
    );
  }
}
ContactsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
  onUnmount: PropTypes.func,
};

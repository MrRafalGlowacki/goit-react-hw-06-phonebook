import React from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';

export const ContactList = ({
  contactList,
  filter,
  onChange,
  onContactRemove,
  onUnmount,
}) => {
  const getFilteredList = () => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const list = getFilteredList().map(contact => (
    <ContactsListItem
      key={contact.id}
      id={contact.id}
      name={contact.name}
      number={contact.number}
      onContactRemove={onContactRemove}
      filter={filter}
      onUnmount={onUnmount}
    />
  ));
  return (
    <>
      <h3 className={css.title}>Contacts</h3>
      {contactList.length > 0 && (
        <ContactFilter filter={filter} onChange={onChange} />
      )}
      {contactList.length > 0 && <ul className={css.container}>{list}</ul>}
    </>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onChange: PropTypes.func,
  onContactRemove: PropTypes.func,
  onUnmount: PropTypes.func,
};

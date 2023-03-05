import React from 'react';
import css from './ContactsList.module.css';
// import PropTypes from 'prop-types';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';

export const ContactList = ({
 

  onContactRemove,
  onUnmount,
}) => {
  const contactsList = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter.filter);
  
  const getFilteredList = () => {
    return contactsList.filter(contact =>
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
      {contactsList.length > 0 && <ContactFilter />}
      {contactsList.length > 0 && <ul className={css.container}>{list}</ul>}
    </>
  );
};

// ContactList.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
//   onContactRemove: PropTypes.func,
//   onUnmount: PropTypes.func,
// };

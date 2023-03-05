import React, { useEffect, useState } from 'react';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  deleteContactAction,
  setContactsAction,
} from 'redux/contactsSlice';

export const App = () => {
  // const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsList = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // console.log(contactsList.length);
  const filter = useSelector(state => state.filter.filter);
  const handleContactWillUnmount = () => {
    if (filter !== '') {
      return;
      // } else {
      //   alert(`${name} is removed from your contacts`);
    }
  };

  useEffect(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts && savedContacts.length > 0) {
        dispatch(setContactsAction(savedContacts));
      }
    } catch (error) {
      console.error('Error parsing saved contacts from localStorage:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(contactsList);
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  const handleRemoveContact = id => {
    dispatch(deleteContactAction(id));
  };
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      // case 'filter':
      //   return setFilter(value);
      default:
        return null;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const found = contactsList.find(contact => contact.name === name);
    if (found) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(
        addContactAction({
          name: name,
          number: number,
        })
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <AddForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        name={name}
        number={number}
      />
      <ContactList
        contactList={contactsList}
        // filter={filter}
        onChange={handleChange}
        onContactRemove={handleRemoveContact}
        onUnmount={handleContactWillUnmount}
      />
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { nanoid } from '@reduxjs/toolkit';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleContactWillUnmount = () => {
    console.log(filter);
    if (filter !== '') {
      return;
      // } else {
      //   alert(`${name} is removed from your contacts`);
    }
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(savedContacts);
  }, []);
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      const contactsArrayStringified = JSON.stringify(contacts);
      localStorage.setItem('contacts', contactsArrayStringified);
    }
  }, [contacts]);

  // componentDidUpdate() {
  //   if (this.state.contacts !== prevState.contacts) {
  //     const contactsArrayStringified = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', contactsArrayStringified);
  //   }
  // }
  // componentDidMount() {

  //   if (!savedContacts) {
  //     return;
  //   } else
  //     try {
  //       this.setState({ contacts: savedContacts });
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }

  const handleRemoveContact = id => {
    const remainingContacts = contacts.filter(contact => contact.id !== id);
    setContacts(remainingContacts);
  };
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      case 'filter':
        return setFilter(value);
      default:
        return null;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const found = contacts.find(contact => contact.name === name);
    if (found) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      const newContacts = [contact, ...contacts];
      setContacts(newContacts);
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
        contactList={contacts}
        filter={filter}
        onChange={handleChange}
        onContactRemove={handleRemoveContact}
        onUnmount={handleContactWillUnmount}
      />
    </>
  );
};

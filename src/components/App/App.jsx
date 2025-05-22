import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const LOCAL_STORAGE_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const contactToAdd = { ...newContact, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, contactToAdd]);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (idToDelete) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== idToDelete));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact}/>

        <SearchBox value={filter} onChange={handleFilterChange} />

        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact}/>
      </div>
    </>
  );
};

export default App;
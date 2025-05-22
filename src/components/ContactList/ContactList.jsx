import React from 'react';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"

const ContactList = ({contacts, onDeleteContact }) => {
    return (
        <ul className={styles['contact-list']}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteContact}/>
            ))}
        </ul>
    );
};

export default ContactList;
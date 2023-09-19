import React from 'react';
import { ContactListItems } from './ContactListItems';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(item => (
        <ContactListItems
          key={item.id}          
          name={contacts.name}
          number={contacts.number}
          onDeleteContact={() => onDeleteContact(item.id)}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;

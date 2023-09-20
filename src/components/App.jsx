
import { Layout } from "./Layout";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { Container } from "@mui/material";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Title } from "./GlobalStyled";
import { useState, useEffect } from "react";

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];
export const App = () => {

const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  
const addContact = (newContact) => {       
    const checkContact = contacts.some(items => {
     return items.name.trim() === newContact.name.trim()  
    })
    
    if (checkContact) {
      alert(`${newContact.name}  is already in contacts `)
      return;
    }
  setContacts(prev => [...prev, newContact]);
};

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  
  const handleChangeFilter = (evt) => { 
    setFilter(evt.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter((contact) => {
      return contact.name.concat(contact.number).toLowerCase().includes(normalizedFilter)
     });
  };
  
    return (
      <Layout>
        <Container maxWidth="xl">
      <Title>Phonebook</Title>
      <AddContactForm addNewContact={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} handleChangeFilter={handleChangeFilter} />      
      <ContactList contacts={getFilterContacts()} onDeleteContact={handleDeleteContact} />    
        </Container>
      </Layout>
    
    );  
 };



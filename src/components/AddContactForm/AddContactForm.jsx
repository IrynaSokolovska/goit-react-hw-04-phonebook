import styled from 'styled-components';

import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';

import { useState } from 'react';
import { nanoid } from 'nanoid';

const Form = styled.form`  
  display: flex;
  flex-flow: column;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;

  gap: 16px;
  width: 400px;
`;

const LabelForm = styled.label`
margin: 0;
margin-bottom: 16px;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 1.33; 
letter-spacing: -0.18px;
`;

export const AddContactForm = ({ addNewContact }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const handleChange = (evt) => {
    if (evt.target.name === 'name') {
      setName(evt.currentTarget.value)
      return;
    }
    setNumber(evt.currentTarget.value)
  };
 
  
  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        addNewContact({ id: nanoid(5), name, number });
        setName('');
        setNumber('');

      }}
    >
      <LabelForm>
        Name
        <input
          id="name"
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>

      <LabelForm>
        Number
        <input
          id="number"
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>

      <Button type="submit" variant="outlined">
        Add contact
      </Button>
    </Form>
  );
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default AddContactForm;




import {useState } from "react";
import { Form } from "./ContactForm.styled";
const ContactForm = ({submit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleChange = ({ target: { value, name } }) => {     
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    submit({ name, number });
  }
  
  return (
    <Form onSubmit={hendleSubmit}>
      <h2>Name</h2>
      <input
        onChange={hendleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <h2>Number</h2>
      <input
        type="tel"
        value={number}
        onChange={hendleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <button type="submit">Add contact</button>
    </Form>
  );
}

export default ContactForm;
import { Component } from "react";
import { Form } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  hendleChange = ({ target: { value, name } }) => {
    
    this.setState({
      [name]: value,
    });
  };
  hendleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state)
  }
  render() {
    return (
      <Form onSubmit={this.hendleSubmit}>
        <h2>Name</h2>
        <input
          onChange={this.hendleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={this.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <h2>Number</h2>
        <input
          type="tel"
          value={this.number}
          onChange={this.hendleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
export default ContactForm;
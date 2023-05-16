import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }
  hendleSaveFind = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };
  hendleFilter = () => {
    const filterContacts = this.state.contacts.filter(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .indexOf(this.state.filter.toLocaleLowerCase()) > -1
    );
    return filterContacts;
  };
  deleteContact = event => {
    const { id } = event.target;
    const filterId = this.state.contacts.filter(constact => constact.id !== id);
    this.setState({
      contacts: [...filterId],
    });
  };

  hendleSubmit = e => {
    if (this.state.contacts) {
      const filterContacts = this.state.contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().indexOf(e.name.toLocaleLowerCase()) >
          -1
      );
      if (filterContacts.length > 0) {
        const sameNames = filterContacts.map(contact => contact.name);
        return alert(`${sameNames} is already in contacts.`);
      }
    }
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: e.name, number: e.number, id: nanoid() },
      ],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.hendleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.hendleSaveFind} />
        <ListContacts
          list={this.hendleFilter()}
          deleteName={this.deleteContact}
        />
      </div>
    );
  }
}


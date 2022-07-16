import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter" 


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: '',
    name: '',
    number: '',
    id: ''
  };
  
  // contactId = nanoid();

  handleAddContact = data => {
    console.log(data);
    const contact = {
      name: data.name,
      number: data.number,
      id: nanoid()
    };
    console.log(contact);
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  getVisibleContacts = () => { 
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {

    const visibleContacts = this.getVisibleContacts();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={ this.state.filter } onChange={this.changeFilter} />
        <ContactList contacts={this.state.contacts} />
      </div>  
    )
  };
};

export default App;


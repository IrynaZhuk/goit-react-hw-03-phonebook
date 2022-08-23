import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts/Contacts';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  contactsChange = (name, number) => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(contact =>
          contact.name.toLowerCase().includes(name.toLowerCase())
        )
      ) {
        return alert(`${name} is already in contacts`);
      }
      return {
        contacts: [
          ...prevState.contacts,
          { name: name, number: number, id: nanoid() },
        ],
      };
    });
  };

  render() {
    return (
      <>
        <section className={styles.section}>
          <h1 className={styles.header}>Phonebook</h1>

          <AddContactForm contactsChange={this.contactsChange} />
          <h2 className={styles.header}>Contacts</h2>
          <Filter filterChange={this.filterChange} />
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </section>
      </>
    );
  }
}

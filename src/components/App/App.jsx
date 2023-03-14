import { ContactElement } from 'components/ContactElement/ContactElement';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { Component } from 'react';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Test Contact', tel: '459-12-56' },
      { id: 'id-2', name: 'Delete Me', tel: '443-89-12' },
    ],
    name: '',
    filter: '',
  };

  onSubmit = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    if (contacts.flatMap(el => el.name).includes(name)) {
      alert(`${name} already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, contact] };
    });
  };

  onChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onClick = value => {
    const newArray = this.state.contacts.filter(
      contact => contact.name !== value
    );
    this.setState({ contacts: newArray });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts')) ?? false) {
      this.setState({
        contacts: [...JSON.parse(localStorage.getItem('contacts'))],
      });
      return;
    }

    this.setState({
      contacts: [...this.state.contacts],
    });
  }

  componentDidUpdate(_, { contacts }) {
    if (this.state.contacts !== contacts) {
      try {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const contacts = this.getContact();
    return (
      <Wrapper>
        <ContactForm contacts={this.state.contacts} onSubmit={this.onSubmit} />
        <ContactList>
          <SearchFilter onChange={this.onChange} />
          <ContactElement contacts={contacts} onClick={this.onClick} />
        </ContactList>
      </Wrapper>
    );
  }
}

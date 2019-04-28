import React, { Component } from "react";

import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
        id: 1
      },
      {
        name: "Karen Williams",
        email: "kwilliams@gmail.com",
        phone: "333-555-5555",
        id: 2
      },
      {
        name: "Henry Johnson",
        email: "henryj@gmail.com",
        phone: "222-555-5555",
        id: 3
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

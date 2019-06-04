import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "SORT_AZ":
      return {
        ...state,
        contacts: state.contacts.sort(function(a, b) {
          if (!action.payload) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          } else {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
          }
        })
      };
    case "SORT_ZA":
      return {
        ...state,
        contacts: state.contacts.sort(function(a, b) {
          if (!action.payload) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          } else {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
          }
        })
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

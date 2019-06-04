import React, { Component } from "react";

import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  state = {
    alphaSort: false,
    zedSort: false
  };

  onSortClick = dispatch => {
    dispatch({ type: "SORT_AZ", payload: this.state.alphaSort });
    this.setState({
      alphaSort: !this.state.alphaSort,
      zedSort: false
    });
  };

  onOppSortClick = dispatch => {
    dispatch({ type: "SORT_ZA", payload: this.state.zedSort });
    this.setState({
      zedSort: !this.state.zedSort,
      alphaSort: false
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts, dispatch } = value;
          return (
            <React.Fragment>
              <h1>
                {" "}
                <i
                  className="fas fa-sort-alpha-down"
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={this.onSortClick.bind(this, dispatch)}
                />
                <i
                  className="fas fa-sort-alpha-up ml-3"
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={this.onOppSortClick.bind(this, dispatch)}
                />
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;

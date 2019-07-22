import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Search Image</label>
            <input
              type="text"
              placeholder="Image Search"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

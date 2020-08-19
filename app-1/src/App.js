import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
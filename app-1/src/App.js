import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
    }
  }

  handleChange(value) {
    this.setState({ output: value })
  }

  render() {
    return (
      <div className="App">
        <input className="input-box" type="text" onChange={(e) => this.handleChange(e.target.value)} />
        <p className="output-box">{this.state.output}</p>
      </div>
    )
  }
}

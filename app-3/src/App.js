import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ["understand onChange", "understand handlers", "understand this.state", "understand e.target.value"],
      input: ''
    }
  }

  handleChange(value) {
    this.setState({ input: value })
  }

  render() {
    const list = this.state.arr
      .filter(e => this.state.input === '' || e.includes(this.state.input))
      .map((e, index) => <h2 key={index}>{e}</h2>)
    return (

      <div className="App">
        <input className="input" type="text" onChange={(e) => this.handleChange(e.target.value)} />
        {list}
      </div>
    )
  }
}
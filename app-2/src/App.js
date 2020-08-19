import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ["understand onChange", "understand handlers", "understand this.state", "understand e.target.value"],
    }
  }

  render() {
    let thingsINeedToLearn = this.state.arr.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })
    return (
      <div className="App">{thingsINeedToLearn}</div>
    )
  }
}
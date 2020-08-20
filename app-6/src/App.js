import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      todo: ''
    };
    this.addToList = this.addToList.bind(this);
  }

  handleChange(value) {
    this.setState({
      todo: value
    })
  }

  addToList() {
    this.setState({
      list: [...this.state.list, this.state.todo],
      todo: ''
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (

      <div className='App'>
        <h1>To-Do List</h1>
        <div>
          <input className='todo' value={this.state.todo} onChange={e => this.handleChange(e.target.value)} />
          <button onClick={this.addToList}>Add to List</button>
        </div>
        {list}
      </div>
    )
  }
}
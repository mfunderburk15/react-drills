import React, { Component } from 'react';
import NewTask from './components/NewTask';
import List from './components.List'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    )
  }

}



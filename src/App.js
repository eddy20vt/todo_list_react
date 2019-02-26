import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;

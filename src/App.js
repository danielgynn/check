import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Welcome to React</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;

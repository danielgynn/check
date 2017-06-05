import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Check App</h2>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;

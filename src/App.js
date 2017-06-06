import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Todos from './pages/Todos';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title='Check App' />

          <Route exact path="/" component={Todos} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

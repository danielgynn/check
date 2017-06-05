import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: []
    };

    this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  loadTodosFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ todoData: res.data });
      })
  }

  handleTodoSubmit(todo) {
    let todos = this.state.todoData;
    todo.id = Date.now();
    let newTodos = todos.concat([todo]);
    this.setState({ todoData: newTodos });

    axios.post(this.props.url, todo)
      .catch(err => {
        console.error(err);
        this.setState({ todoData: todos });
      })
  }

  componentDidMount() {
    this.loadTodosFromServer();
    setInterval(this.loadTodosFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Check App</h2>
        <AddTodo onTodoSubmit={ this.handleTodoSubmit } />
        <TodoList data={ this.state.todoData } />
      </div>
    );
  }
}

export default App;

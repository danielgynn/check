import React, { Component } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      url: 'http://localhost:3001/api/todos',
      pollInterval: 2000
    };

    this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleNotesSubmit = this.handleNotesSubmit.bind(this);
  }

  loadTodosFromServer() {
    axios.get(this.state.url)
      .then(res => {
        this.setState({ todoData: res.data });
      })
  }

  handleTodoSubmit(todo) {
    let todos = this.state.todoData;
    todo.id = Date.now();
    let newTodos = todos.concat([todo]);
    this.setState({ todoData: newTodos });

    axios.post(this.state.url, todo)
      .catch(err => {
        console.error(err);
        this.setState({ todoData: todos });
      })
  }

  handleCheckClick(id, todo) {
    axios.put(`${this.state.url}Check/${id}`, todo)
      .catch(err => {
        console.log(err);
      })
  }

  handleTodoDelete(id) {
    axios.delete(`${this.state.url}/${id}`)
      .then(res => {
        console.log('Todo deleted.');
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleNotesSubmit(id, todo) {
    axios.put(`${this.state.url}Notes/${id}`, todo)
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.loadTodosFromServer();
    setInterval(this.loadTodosFromServer, this.state.pollInterval);
  }

  render() {
    return (
      <div className="wrapper">
        <AddTodo onTodoSubmit={ this.handleTodoSubmit } />
        <TodoList
          onCheckClick={ this.handleCheckClick }
          onTodoDelete={ this.handleTodoDelete }
          onNotesSubmit={ this.handleNotesSubmit }
          data={ this.state.todoData }
        />
      </div>
    );
  }
}

export default Todos;

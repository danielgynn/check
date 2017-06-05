import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     text: ''
   };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.state.text.trim();

    if (!text) {
      return;
    } else {
      this.props.onTodoSubmit({ text: text });
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.text} placeholder='Add a new todo...'
          onChange={this.handleUpdate}
        />
      </form>
    );
  }
}

export default AddTodo;

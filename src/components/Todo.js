import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      tag: this.props.tag,
      deadline: this.props.deadline,
      notes: this.props.notes
    };

    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleCheckClick(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let complete = (this.state.complete) ? false : true;
    let todo = { complete: complete };
    this.props.onCheckClick(id, todo);
    this.setState({
      complete: complete
    });
  }

  deleteTodo(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onTodoDelete(id);
  }

  render() {
    return (
      <div>
        <div className='check-container'>
          <form onClick={ this.handleCheckClick }>
            <input type='checkbox' id={ this.state.text } onChange={ this.handleCheckClick } checked={ this.props.complete } defaultChecked={ this.state.complete } />
            <label htmlFor={ this.state.text } />
          </form>
          <div className='check-details'>
            <p>{ this.state.text }</p>
            <div>
              <button onClick={ this.deleteTodo }>Delete</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Todo;

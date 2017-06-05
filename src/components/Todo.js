import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete,
      text: this.props.text
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='check-container'>
          <form action="#">
            <input type='checkbox' id={ this.state.text } onChange={ this.onChangeHandler } defaultChecked={ this.state.complete } />
            <label htmlFor={ this.state.text } />
          </form>
          <div className='check-details'>
            <p>{ this.state.text }</p>
            <div className='check-meta'>
              <span>{this.props.tag}</span> • <span>{this.props.date}</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Todo;

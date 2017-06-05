import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      text: this.props.text,
      tag: this.props.tag,
      deadline: this.props.deadline,
      notes: this.props.notes
    };

    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleCheckClick(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let complete = (this.state.complete) ? false : true;
    let todo = { complete: complete };
    this.props.onCheckClick(id, todo);
    this.setState({
      complete: complete
    })
  }

  render() {
    return (
      <div>
        <div className='check-container'>
          <form onClick={ this.handleCheckClick }>
            <input type='checkbox' id={ this.state.text } onChange={ this.handleCheckClick } checked={ this.props.complete } />
            <label htmlFor={ this.state.text } />
          </form>
          <div className='check-details'>
            <p>{ this.state.text }</p>
            <div className='check-meta'>
              { (this.state.tag) ? (<span>{ this.props.tag }</span>) : (
                <form onSubmit={ this.handleTodoUpdate }>
                  <input type='text' placeholder='Add tag' />
                </form>
              ) }
              { (this.state.deadline) ? (<span>{ this.props.deadline }</span>) : (<span>Add Deadline</span>) }
              { (this.state.notes) ? (<span>{ this.props.notes }</span>) : (<span>Add Notes</span>) }
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Todo;

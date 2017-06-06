import React, { Component } from 'react';

class TodoMeta extends Component {
  render() {
    return (
      <div className='check-meta'>
        { (this.props.tag) ? (<span>{ this.props.tag }</span>) : ( <span>Add Tag</span> ) }
        { (this.props.deadline) ? (<span>{ this.props.deadline }</span>) : (<span>Add Deadline</span>) }
        { (this.props.notes) ? (<span>{ this.props.notes }</span>) : (<span>Add Notes</span>) }
      </div>
    );
  }
}

export default TodoMeta;

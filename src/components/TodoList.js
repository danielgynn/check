import React, { Component } from 'react';
import Todo from './Todo';
import ToggleButton from './ToggleButton';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'ALL'
    }
  }

  handleClick(filter) {
    this.setState({
      filter: filter
    })
  }

  render() {
    let todos = this.props.data
      .filter(todo => {
        return (this.state.filter === 'COMPLETE') ? todo.complete : ((this.state.filter === 'INCOMPLETE') ? !todo.complete : todo);
      })
      .sort(todo => { return todo.complete })
      .map(todo => {
       return (
         <Todo
           key={ todo['_id'] }
           uniqueID={ todo['_id'] }
           text={todo.text}
           complete={todo.complete}
           tag={todo.tag}
           date={todo.date}
           notes={todo.notes}
           onCheckClick = { this.props.onCheckClick }
          />
       )
     })
     return (
      <div>
        <div className='margin-y'>
          <ToggleButton
          name='ALL'
          filter='ALL'
          isActive={this.state.filter==='ALL'}
          onClick={this.handleClick.bind(this)}
          />

          <ToggleButton
          name='COMPLETE'
          filter='COMPLETE'
          isActive={this.state.filter==='COMPLETE'}
          onClick={this.handleClick.bind(this)}
          />

          <ToggleButton
          name='INCOMPLETE'
          filter='INCOMPLETE'
          isActive={this.state.filter==='INCOMPLETE'}
          onClick={this.handleClick.bind(this)}
          />
        </div>
        <div className='todo-list'>
          { todos }
        </div>
      </div>
     )
  }
}

export default TodoList;

import React, { Component } from 'react';
import Todo from './Todo';
import ToggleButton from './ToggleButton';
import OrderButton from './OrderButton';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'INCOMPLETE',
      order: 'OLDEST'
    }
  }

  handleClick(filter) {
    this.setState({ filter: filter });
  }

  handleOrderClick(order) {
    this.setState({ order: order });
  }

  render() {
    let todos = this.props.data
      .filter(todo => {
        return (this.state.filter === 'COMPLETE') ? todo.complete : ((this.state.filter === 'INCOMPLETE') ? !todo.complete : todo);
      })
      .sort(todo => { return (this.state.order === 'OLDEST') ? todo.createdAt : ((this.state.order === 'LATEST') ? !todo.createdAt : null) })
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
           createdAt={ todo.created_at }
           onCheckClick={ this.props.onCheckClick }
           onTodoDelete={ this.props.onTodoDelete }
           onNotesSubmit={ this.props.onNotesSubmit }
          />
       )
     })
     return (
      <div>
        <div className='flex-inline'>
          <div className='margin-y'>
            <ToggleButton
              name='INCOMPLETE'
              filter='INCOMPLETE'
              isActive={this.state.filter==='INCOMPLETE'}
              onClick={this.handleClick.bind(this)}
            />

            <ToggleButton
              name='COMPLETE'
              filter='COMPLETE'
              isActive={this.state.filter==='COMPLETE'}
              onClick={this.handleClick.bind(this)}
            />

            <ToggleButton
              name='ALL'
              filter='ALL'
              isActive={this.state.filter==='ALL'}
              onClick={this.handleClick.bind(this)}
            />
          </div>
          <div className='margin-y'>
            <OrderButton
              name='LATEST'
              order='LATEST'
              isActive={this.state.order==='LATEST'}
              onClick={this.handleOrderClick.bind(this)}
            />

          <OrderButton
              name='OLDEST'
              order='OLDEST'
              isActive={this.state.order==='OLDEST'}
              onClick={this.handleOrderClick.bind(this)}
            />
          </div>
        </div>
        <div className='todo-list'>
          { todos }
        </div>
      </div>
     )
  }
}

export default TodoList;

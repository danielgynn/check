import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'ALL'
    }
  }

  toggleFilter(filter) {
    this.setState({ filter: filter })
  }

  render() {
    let todos = this.props.data
      .filter(todo => {
        return (this.state.filter === 'COMPLETE') ? todo.complete : ((this.state.filter === 'INCOMPLETE') ? !todo.complete : todo);
      })
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
         <button onClick={ () => this.toggleFilter('ALL') }>SHOW ALL</button>
         <button onClick={ () => this.toggleFilter('COMPLETE') }>SHOW COMPLETE</button>
         <button onClick={ () => this.toggleFilter('INCOMPLETE') }>SHOW INCOMPLETE</button>
         { todos }
       </div>
     )
  }
}

export default TodoList;

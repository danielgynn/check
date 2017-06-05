import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    let todos = this.props.data.map(todo => {
       return (
         <Todo
           key={todo.id}
           text={todo.text}
           complete={todo.complete}
           tag={todo.tag}
           date={todo.date}
           notes={todo.notes}
          />
       )
     })
     return (
       <div>
         { todos }
       </div>
     )
  }
}

export default TodoList;

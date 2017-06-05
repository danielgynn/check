import React, { Component } from 'react';
import Todo from './Todo';
import DATA from '../test-data';

class TodoList extends Component {
  render() {
    let todos = DATA.map(todo => {
       return (
         <Todo
           key={todo.id}
           text={todo.text}
           complete={todo.complete}
           tag={todo.tag}
           date={todo.date}
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

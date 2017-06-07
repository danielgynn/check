import React, { Component } from 'react';
import NoteIcon from 'react-icons/lib/fa/sticky-note';
import CalendarIcon from 'react-icons/lib/fa/calendar-check-o';
import Datetime from 'react-datetime';
import moment from 'moment';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      tag: this.props.tag,
      deadline: null,
      deadlineDisplay: false,
      notesDisplay: false,
      notes: ''
    };

    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleNotesDisplay = this.toggleNotesDisplay.bind(this);
    this.handleNotesUpdate = this.handleNotesUpdate.bind(this);
    this.submitNotes = this.submitNotes.bind(this);
    this.toggleDeadline = this.toggleDeadline.bind(this);
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
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

  toggleNotesDisplay(e) {
    e.preventDefault();
    let display = (this.state.notesDisplay) ? false : true;
    this.setState({ notesDisplay: display });
  }

  handleNotesUpdate(e) {
    this.setState({notes: e.target.value});
    console.log(this.state.notes);
  }

  submitNotes(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let notes = (this.state.notes) ? this.state.notes : null;
    let todo = { notes: notes };
    this.props.onNotesSubmit(id, todo);
    this.setState({ notes: notes });
  }

  toggleDeadline(e) {
    e.preventDefault();
    let display = (this.state.deadlineDisplay) ? false : true;
    this.setState({ deadlineDisplay: display });
  }

  handleDeadlineChange(date) {
    const dates = {date};
    let id = this.props.uniqueID;
    let deadline = (dates.date) ? dates.date : null;
    let todo = { deadline: deadline };
    this.props.onDateSubmit(id, todo);
    this.setState({ deadline: deadline });
  }

  render() {
    return (
      <div>
        <div className='check-container'>
          <form onClick={ this.handleCheckClick }>
            <input type='checkbox' id={ this.state.text } onChange={ this.handleCheckClick } checked={ this.props.complete } defaultChecked={ this.state.complete } />
            <label htmlFor={ this.state.text } />
          </form>
          <div className='todo-details' onClick={ this.toggleNotesDisplay }>
            <div className='check-details'>
              <p>{ this.state.text } { (this.props.deadline) ? (<CalendarIcon />) : null } { (this.props.notes) ? <NoteIcon /> : null }</p>
              <div>
                <button onClick={ this.toggleDeadline }>Add Deadline</button>
                { (!this.props.notes) ? ((this.state.notesDisplay) ? <button onClick={ this.toggleNotesDisplay }>Cancel</button> : <button onClick={ this.toggleNotesDisplay }>Add Notes</button>) : null }
                <button onClick={ this.deleteTodo }>Delete</button>
              </div>
            </div>
          </div>
        </div>
        { (this.state.notesDisplay) ? (
          (this.props.notes) ? (<div className='notes'><p>Due: {this.props.deadline}</p><p>{this.props.notes}</p></div>) : (<form className='notes' onSubmit={this.submitNotes}><input type='text' placeholder='Add notes...' value={this.state.notes} onChange={this.handleNotesUpdate} /></form>)
        ) : null }

        { (this.state.deadlineDisplay) ? ( <Datetime input={false} dateFormat="DD-MM-YYYY" value={moment(this.state.deadline).format('LL')} onChange={ this.handleDeadlineChange }/> ) : null }
        <hr />
      </div>
    );
  }
}

export default Todo;

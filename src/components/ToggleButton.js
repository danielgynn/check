import React, { Component } from 'react';

class ToggleButton extends Component {
  handleClick() {
    this.props.onClick(this.props.filter);
  }

  render() {
    return (
      <button className={this.props.isActive ? 'active' : 'inactive'} onClick={this.handleClick.bind(this)} >
        <span>{this.props.name}</span>
      </button>
    )
  }
}

export default ToggleButton;

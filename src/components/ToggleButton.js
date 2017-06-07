import React, { Component } from 'react';

class ToggleButton extends Component {
  handleFilterClick() {
    this.props.onClick(this.props.filter);
  }

  render() {
    return (
      <button className={this.props.isActive ? 'active' : 'inactive'} onClick={this.handleFilterClick.bind(this)} >
        <span>{this.props.name}</span>
      </button>
    )
  }
}

export default ToggleButton;

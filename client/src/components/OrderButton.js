import React, { Component } from 'react';

class OrderButton extends Component {
  handleOrderClick() {
    this.props.onClick(this.props.order);
  }

  render() {
    return (
      <button className={this.props.isActive ? 'active' : 'inactive'} onClick={this.handleOrderClick.bind(this)} >
        <span>{this.props.name}</span>
      </button>
    )
  }
}

export default OrderButton;

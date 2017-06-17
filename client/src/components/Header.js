import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='header wrapper'>
        <Link to="/"><h2>{ this.props.title }</h2></Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Header;

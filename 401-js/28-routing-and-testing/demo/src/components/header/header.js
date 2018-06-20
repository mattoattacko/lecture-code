import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">List</Link></li>
            <li><Link to="/item">Item</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
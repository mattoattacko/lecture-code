import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>

            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
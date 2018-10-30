import './counter.scss';

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    this.setState({ count });
  }

  render() {
    return (
      <section className="counter">
        <span className="clicker" onClick={this.handleDown}>
          -
        </span>
        <span className="count">{this.state.count}</span>
        <span className="clicker" onClick={this.handleUp}>
          -
        </span>
      </section>
    );
  }
}

export default Counter;

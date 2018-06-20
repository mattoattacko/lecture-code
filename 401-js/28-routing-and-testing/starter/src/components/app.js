import React from 'react';

import '../style/app.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <h1>Hello World</h1>
      </main>
    );
  }

}
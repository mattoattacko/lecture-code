import React from 'react';

import Header from './header/header.js';
import Footer from './footer/footer.js';

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
      <React.Fragment>
        <Header title="Shred Fellows"/>
        <main>
          <h1>Hello World</h1>
        </main>
        <Footer footerText="We rock"/>
      </React.Fragment>
    );
  }

}
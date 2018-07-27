import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

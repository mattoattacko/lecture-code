import React from 'react';

import './footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div>{this.props.footerText}</div>
      </footer>
    );
  }
}

export default Footer;
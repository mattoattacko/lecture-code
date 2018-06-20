import React from 'react';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    console.log('Props', this.props);
  }

  render() {
    return (
      <div id="item">
        {this.props.items[this.props.match.params.id]}
      </div>
    );
  }

}
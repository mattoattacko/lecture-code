import React from 'react';

import './pokemon.scss';

export default class PokemonDetail extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    let image = this.props.pokemon.sprites
      ? <img src={this.props.pokemon.sprites.front_default}/>
      : null;

    return (
      <div className="pokemonDetail">
        <h2>{this.props.pokemon.name}</h2>
        {image}
        <div>
        ... possibly more details here
        </div>
      </div>
    );
  }
};


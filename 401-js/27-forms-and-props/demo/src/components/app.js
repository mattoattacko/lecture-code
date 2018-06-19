import React from 'react';

import PokemonList from './pokemon/list.js';
import PokemonDetail from './pokemon/detail.js';
import {fetchData} from '../lib/utils.js';

import '../style/app.scss';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonList:[],
      loading:null,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.loadPokemonDetails = this.loadPokemonDetails.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  async componentDidMount() {
    const data = await this.loadPokemonList();
    this.setState( Object.assign(...this.state,data) );
  }

  async loadPokemonList() {
    const pokeData = await fetchData(pokemonAPI);
    let loading = null;
    let pokemonList = pokeData.results;
    return {pokemonList, loading};
  }

  async loadPokemonDetails(e) {
    let element = e.target;
    let url = e.target.value;
    const pokeData = await fetchData(url);
    let loading = null;
    let pokemon = pokeData;
    this.setState( Object.assign(...this.state,{pokemon}) );
  }
  
  handleSearch(e) {
    e.preventDefault();
    let search = e.target.value();
  }

  render() {
    return (
      <main>
        <PokemonList pokemon={this.state.pokemonList} loadPokemonDetails={this.loadPokemonDetails} handleSearch={this.handleSearch}/>
        <PokemonDetail pokemon={this.state.pokemon}/>
      </main>
    );
  }
  
}

export default App;
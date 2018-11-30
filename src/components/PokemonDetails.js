import React, { Component } from "react";
import axios from "axios";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonNumber: "",
      // empty array that will have our pokemon info from the API
      searchResults: [],
    };
  }

  // get called automatically by React after the component first loads
  // (where you can make API requests immediately when the page loads)
  componentDidMount() {
    // get random pokemon number (1-802)
    const randomNumber = Math.floor(Math.random() * 802) + 1;
    // make a GET request to the pokeapi.com API SERVER
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then(response => {
        console.log(response.data);

        const { sprites, name, id } = response.data;
        const { searchResults } = this.state;

        // change the state to update the HTML
        searchResults.push({ name, id, sprites });
        this.setState({ searchResults });
      })
      .catch(err => {
        console.log("Random POKE error", err);
        alert("Sorry! Something went wrong.");
      });
  }

  getFaveInfo() {
    // charizard  6  | pikachu 25
    // jigglypuff 39 | mewtwo 150

    // make a GET request to the pokeapi.com API SERVER
    axios.get("https://pokeapi.co/api/v2/pokemon/160/")
      .then(response => {
        console.log(response.data);

        const { id, name, sprites } = response.data;
        const { searchResults } = this.state;

        // change the state to update the HTML
        searchResults.push({ id, name, sprites });
        this.setState({ searchResults })
      })
      .catch(err => {
        console.log("Pokemon Info ERROR!", err);
        alert("Sorry! Something went wrong.");
      });
  }

  syncPokeNumber(event) {
    this.setState({ pokemonNumber: event.target.value });
  }

  searchPokeInfo(event) {
    // stop the page reload of the form submit
    event.preventDefault();

    const { pokemonNumber } = this.state;
    // make a GET request to the pokeapi.com API SERVER
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
      .then(response => {
        console.log(response.data);

        const { name, id, sprites } = response.data;
        const { searchResults } = this.state;

        // change the state to update the HTML
        searchResults.push({ name, id, sprites });
        this.setState({ searchResults });
      })
      .catch(err => {
        console.log("Pokemon Search ERROR!", err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    return (
      <section className="PokemonDetails">
        <h2>Pokemon Search</h2>

        <button onClick={() => this.getFaveInfo()}>
          Get Feraligatr
        </button>

        <form onSubmit={event => this.searchPokeInfo(event)}>
          <label>
            Pokemon Number:
            <input value={this.state.pokemonNumber}
                onChange={event => this.syncPokeNumber(event)}
                type="number" name="pokemonNumber" placeholder="150" />
          </label>

          <button>Search</button>
        </form>

        <h3>Search Results</h3>
        <ul>
          {this.state.searchResults.map(onePoke => {
            return (
              <li key={onePoke.id}>
                <h2>{onePoke.name}</h2>
                <p>Pokemon Number: {onePoke.id}</p>
                <img src={onePoke.sprites.front_default} alt={onePoke.name} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default PokemonDetails;

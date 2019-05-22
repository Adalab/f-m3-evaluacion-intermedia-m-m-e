import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/pokemonData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: pokemon,
      favorites: []
    }
    this.handleFavorites = this.handleFavorites.bind(this);
  }
  printId(event) {
    const thisPokemonId = event.currentTarget.id;
    console.log('Poke ID:', thisPokemonId);
  }

  handleFavorites(event) {
    const target = event.currentTarget;
    const name = target.id;
    if (this.state.favorites.indexOf(name) < 0) {
      this.setState(prevState => {
        const newFavorites = [...prevState.favorites, name]
        console.log(newFavorites);
        return(
          {favorites: newFavorites}
        )
      })
    } else {
      this.setState(prevState => {
        const item = this.state.favorites.indexOf(name);
        const newFavorites = [...prevState.favorites];
        newFavorites.splice(item, 1);
        console.log(newFavorites);
        return(
          {favorites: newFavorites}
        )
      })
    }
  }

  render() {
    const {pokemonData, favorites} = this.state;
    const {printId, printName, handleFavorites} = this;
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList 
          pokemon={pokemonData} 
          printId={printId} 
          printName={printName} 
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      </div>
    );
  }
}

export default App;

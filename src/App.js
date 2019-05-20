import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/pokemonData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pokemonData: pokemon,
      favorites: []
    }
    // this.printName = this.printName.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }
  printId(event) {
    const thisPokemonId = event.currentTarget.id;
    console.log('Poke ID:', thisPokemonId);
  }
  
  // printName(event) {
  //   const thisPokemonName = event.currentTarget.id;
  //   const capitalisedName = thisPokemonName.charAt(0).toUpperCase() + thisPokemonName.slice(1);
  //   this.setState({name: capitalisedName});
  // }

  handleFavorites(event) {
    const name = event.currentTarget.id;
    if (this.state.favorites.indexOf(name) < 0) {
      this.setState(prevState => {
        const newFavorites = [...prevState.favorites, name]
        return(
          {favorites: newFavorites}
        )
      })
    } else {
      this.setState(prevState => {
        const newFavorites = [...prevState.favorites.filter(item => item.id !== name)]
        newFavorites.splice(name, 1);
        return(
          {favorites: newFavorites}
        )
      })
    }
  }

  render() {
    const {pokemonData, name} = this.state;
    const {printId, printName, handleFavorites} = this;
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList 
          pokemon={pokemonData} 
          printId={printId} 
          printName={printName} 
          handleFavorites={handleFavorites}
        />
        <p className="results">
          {this.state.name !== '' ? `${name}, I choose you!` : ''}
        </p>
      </div>
    );
  }
}

export default App;

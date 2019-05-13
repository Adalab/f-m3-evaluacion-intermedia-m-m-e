import React from 'react';
import './App.css';
import PokeList from './components/PokeList';

const pokemon = [
  {"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
  {"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
  {"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
  {"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
  {"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},
  {"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
  {"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
  {"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},
  {"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
  {"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }
    this.printName = this.printName.bind(this);
  }
  printId(event) {
    const thisPokemonId = event.currentTarget.id;
    console.log('Poke ID:', thisPokemonId);
  }
  
  printName(event) {
    const thisPokemonName = event.currentTarget.innerHTML;
    this.setState({name: thisPokemonName});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList pokemon={pokemon} printId={this.printId} printName={this.printName}/>
        <p className="results">You have chosen {this.state.name}</p>
      </div>
    );
  }
}

export default App;

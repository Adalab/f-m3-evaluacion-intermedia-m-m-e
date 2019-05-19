import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './pokelist.css';

class PokeList extends React.Component {
  render() {
    const {pokemon, printId, printName, addToFavorites} = this.props;
    return (
      <ul className="list">
        {pokemon.map(item => {
          return (
            <li className="list__item" id={item.id} key={item.id} onClick={printId}>
              <Pokemon 
                url={item.url} 
                name={item.name} 
                types={item.types} 
                printName={printName} 
                addToFavorites={addToFavorites}
              />
            </li>
          )
        })}
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.array,
}

export default PokeList;
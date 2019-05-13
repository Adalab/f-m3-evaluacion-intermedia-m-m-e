import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <ul className="list">
        {pokemon.map(item => {
          return <li className="list__item" key={item.id}>
            <Pokemon pokemon={item}/>
          </li>
        })}
      </ul>
    );
  }
}

export default PokeList;
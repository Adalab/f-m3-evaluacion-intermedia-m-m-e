import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <ul className="list">
        {pokemon.map(item => {
          return <li className="list__item" key={item.id}>
            <Pokemon url={item.url} name={item.name} types={item.types}/>
          </li>
        })}
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.array,
}

export default PokeList;
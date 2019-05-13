import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div className="list__item-card">
        <img src={pokemon.url} alt={pokemon.name} className="card-image"/>
        <h2 className="card-name">{pokemon.name}</h2>
        <ul className="types__list-item">
          {pokemon.types.map((pokemon, index) => {
            return <li className="types__list-item" key={index}>{pokemon}</li>
          })}
        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object,
}

export default Pokemon;
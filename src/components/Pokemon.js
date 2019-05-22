import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { url, name, types, handleFavorites, favorites } = this.props;
    return (
      <div className={favorites.includes(name) ? 'fave list__item-card' : 'list__item-card'} id={name} onClick={handleFavorites}>
        <img src={url} alt={name} className="card-image"/>
        <h2 className="card-name">{name}</h2>
        <ul className="types__list">
          {types.map((type, index) => {
            return <li className="types__list-item" key={index}><span className="type">{type}</span></li>
          })}
        </ul>
        <i className={favorites.includes(name) > 0 ? 'fave fas fa-heart' : 'far fa-heart'}></i>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
}

export default Pokemon;
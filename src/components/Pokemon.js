import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <div className="list__item-card">
        <img src={url} alt={name} className="card-image"/>
        <h2 className="card-name">{name}</h2>
        <ul className="types__list-item">
          {types.map((type, index) => {
            return <li className="types__list-item" key={index}>{type}</li>
          })}
        </ul>
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
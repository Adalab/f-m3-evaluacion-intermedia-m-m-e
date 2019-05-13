import React from 'react';

class PokeList extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <ul className="list">
        {pokemon.map(item => {
          return <li className="list__item" key={item.id}>
            <div className="list__item-card">
              <img src={item.url} alt={item.name} className="card-image"/>
              <h2 className="card-name">{item.name}</h2>
              <ul className="types__list-item">
                {item.types.map((item, index) => {
                  return <li className="types__list-item" key={index}>{item}</li>
                })}
              </ul>
            </div>
          </li>
        })}
      </ul>
    );
  }
}

export default PokeList;
import React from 'react';

function Pokemon(props) {

    console.log(props)
    return (
      <div>
        <h1>{props.pokemon.name}</h1>
        <img src={props.pokemon.sprites.front_default} alt="Pokemon" />
        <p>Height: {props.pokemon.height}</p>
        <p>Weight: {props.pokemon.weight}</p>
        <p>Base Experience: {props.pokemon.base_experience}</p>
      </div>
    );
}

export default Pokemon;
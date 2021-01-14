import React from 'react';

function Pokemon(props) {

    console.log(props)
    return (
        <div class="card m-2" style={{width: '18rem'}}>
            <img src={props.pokemon.sprites.front_default} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.pokemon.name}</h5>
                <p class="card-text">Height: {props.pokemon.height}</p>
                <p class="card-text">Weight: {props.pokemon.weight}</p>
                <p class="card-text">Base Experience: {props.pokemon.base_experience}</p>
            </div>
        </div>

    );
}

export default Pokemon;
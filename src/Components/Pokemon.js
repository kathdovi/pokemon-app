import React from 'react';

function Pokemon(props) {

    console.log(props)
    return (
      <div class="card m-2" style={{ width: "18rem" }}>
        <img
          src={
            props.pokemon.sprites.front_default
              ? props.pokemon.sprites.front_default
              : "https://contentmedia.dornbracht.com/-/media/foundation/products/product_image_not_available.jpg?rev=fcf4993f169c4dca8fd69e873ce29241"
          }
          class="card-img-top"
          alt="Pokemon"
        />
        <div class="card-body">
          <h5 class="card-title">{props.pokemon.name}</h5>
          <p class="card-text">
            <b>Height: </b>
            {props.pokemon.height}
          </p>
          <p class="card-text">
            <b>Weight: </b>
            {props.pokemon.weight}
          </p>
          <p class="card-text">
            <b>Base Experience: </b>
            {props.pokemon.base_experience}
          </p>
        </div>
      </div>
    );
}

export default Pokemon;
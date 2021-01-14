import {
    FETCH_POKEMON_BEGIN,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE
} from './ActionTypes';

export const fetchPokemonBegin = () => ({
    type: FETCH_POKEMON_BEGIN
});

export const fetchPokemonSuccess = pokemon => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: { pokemon }
});

export const fetchPokemonFailure = error => ({
    type: FETCH_POKEMON_FAILURE,
    payload: { error }
});

export function fetchPokemon(id, isRandom) {
    return dispatch => {
        dispatch(fetchPokemonBegin());
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchPokemonSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchPokemonFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
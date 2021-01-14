import {
    FETCH_POKEMON_BEGIN,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE
} from './ActionTypes';

const initialState = {
    pokemon: [],
    loading: false,
    error: null
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POKEMON_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POKEMON_SUCCESS:
            
            return {
                ...state,
                loading: false,
                pokemon: state.pokemon.length > 3 ?  [...state.pokemon.slice(0, -1), action.payload.pokemon] : [...state.pokemon, action.payload.pokemon] 
            };

        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}
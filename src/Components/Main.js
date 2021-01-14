import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { connect } from 'react-redux';
import { fetchPokemon, fetchRandomPokemon } from '../redux/ActionCreators';

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon,
    loading: state.pokemon.loading,
    error: state.pokemon.error
});

class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPokemon(7));
        this.props.dispatch(fetchPokemon(4));
        this.props.dispatch(fetchPokemon(1));
    }

    render() {
        const { error, loading, pokemon } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <button onClick={e=> this.props.dispatch(fetchRandomPokemon())}>random</button>
                {pokemon.map(pokemon =>
                    <Pokemon pokemon={pokemon} />
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);

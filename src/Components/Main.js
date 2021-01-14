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

        return (
          <div>
            <nav class="navbar sticky-top navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">
                  Pokemon Application
                </a>
              </div>
            </nav>
            <div class="container">
              <div class="row">
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-dark m-2"
                    onClick={(e) => this.props.dispatch(fetchRandomPokemon())}
                  >
                    random
                  </button>
                </div>
              </div>
              {loading ? <div>Loading...</div> : ''}
              {error ? <div>Error! {error.message}</div> : ''}
              <div class="row">
                <div class="col d-flex justify-content-center">
                  {pokemon.map((pokemon) => (
                    <Pokemon pokemon={pokemon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default connect(mapStateToProps)(Main);

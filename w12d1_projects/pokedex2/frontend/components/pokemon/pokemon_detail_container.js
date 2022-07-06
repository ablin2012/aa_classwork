import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => (
  console.log("pokemon detail container", state.entities.pokemon[ownProps.match.params.pokemonId]), console.log("ownprops", ownProps.match ), 
  {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  }
);

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail) // where does this inherit the props from




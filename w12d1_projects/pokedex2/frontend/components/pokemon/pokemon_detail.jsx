import React from "react";

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
    // where do these props inherit from
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)  
    console.log("pokemon detail", this.props);
  }

  render(){
    return null
  }

}


export default PokemonDetail;
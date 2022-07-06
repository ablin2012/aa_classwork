import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
    return(
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <li>
                <span>{props.pokemon.id}</span>
                <span>{props.pokemon.name}</span>
                <img src={props.pokemon.imageUrl} />
            </li>
        </Link>
    )
}

export default PokemonIndexItem;
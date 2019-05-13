import React from "react";
import Pokecard from "./pokecard";
import pokies from "./pokies";
import { directive } from "@babel/types";

class Pokedex extends React.Component {
  
  render() {
    return <div className="d-flex justify-content-center">{this.props.pokemon.map(p => <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)}</div>;
  }
}

Pokedex.defaultProps = {
  pokemon: pokies
};

export default Pokedex;
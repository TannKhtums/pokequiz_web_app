"use client";

import React from "react";
import PokemonCardImage from "../../components/PokemonCardImage";

const Learn = () => {
  return (
    <div>
      <h1>Learn Page</h1>
      <PokemonCardImage pokemonID={"001"} />
      <PokemonCardImage pokemonID={"004"} />
      <PokemonCardImage pokemonID={"007"} />
      <PokemonCardImage pokemonID={"172"} />

      <p>This is the Learn page.</p>
    </div>
  );
};

export default Learn;

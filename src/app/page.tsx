"use client";

import React from "react";
import PokemonCardImage from "../components/PokemonCardImage";
import tw from "tailwind-styled-components";
import Button from "../components/Button";
// import PokemonImage IMPORT

const Home = () => {
  return (
    <FullWidthDiv>
      <Title>Select a training level:</Title>
      <PokemonCardImage pokemonID={"red_egg"} />
      <PokemonCardImage pokemonID={"004"} />
      <PokemonCardImage pokemonID={"005"} />
      <PokemonCardImage pokemonID={"006"} />
      <PokemonCardImage pokemonID={"006_f3"} />
    </FullWidthDiv>
  );
};

const FullWidthDiv = tw.div`
justify-center
`;

const Title = tw.div`
text-2xl
text-gray-800
justify-center
text-center
`;

export default Home;

import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

import BlueEgg from "../../public/Eggs/blue_egg_new.png";
import GreenEgg from "../../public/Eggs/green_egg_new.png";
import RedEgg from "../../public/Eggs/red_egg_new.png";
import YellowEgg from "../../public/Eggs/yellow_egg_new.png";
// import PokeQuizImage from '../images/pokequiz.png';

//create styled image with styling to return

const PokemonCardImage = (props) => {
  console.log("pokemonImage", props);
  var imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemonID}.png`;
  function checkForEggImage() {
    if (props.pokemonID === "blue_egg") {
      return (
        <PokemonCardContainer>
          <Image src={BlueEgg} alt="Pokemon" width={500} height={500} />
        </PokemonCardContainer>
      );
    }
    if (props.pokemonID === "green_egg") {
      return (
        <PokemonCardContainer>
          <Image src={GreenEgg} alt="Pokemon" width={500} height={500} />
        </PokemonCardContainer>
      );
    }
    if (props.pokemonID === "yellow_egg") {
      return (
        <PokemonCardContainer>
          <Image src={YellowEgg} alt="Pokemon" width={500} height={500} />
        </PokemonCardContainer>
      );
    }
    if (props.pokemonID === "red_egg") {
      return (
        <PokemonCardContainer>
          <Image src={RedEgg} alt="Pokemon" width={500} height={500} />
        </PokemonCardContainer>
      );
    } else {
      return (
        <PokemonCardContainer>
          <Image src={imgURL} alt="Pokemon" width={500} height={500} />
        </PokemonCardContainer>
      );
    }
  }

  return <div id="test">{checkForEggImage()}</div>;
};

export default PokemonCardImage;

const PokemonCardContainer = tw.div`
  bg-gray-200
  transition-all
  duration-500
  ease-in-out
  rounded-xl
  hover:bg-gray-300
  w-[250px]
  h-auto
  m-3
`;

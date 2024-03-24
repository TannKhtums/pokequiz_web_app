import React from "react";
import Image from "next/image";

import bulbasaur from "../../public/Pokemon/001.png";

const PokemonCardImageOld = ({ imageName }) => {
  return (
    <div>
      <h1>Card</h1>
      <Image src={bulbasaur} alt="bulbasaur" width={500} height={500} />
    </div>
  );
};

export default PokemonCardImageOld;

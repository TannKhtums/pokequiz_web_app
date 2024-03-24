"use client";

import React, { useEffect, useState } from "react";
import PokemonCardImage from "../../components/PokemonCardImage";
import Button from "../../components/Button";
import { Input, Space, Select, Divider } from "antd";

function ComparePokemon() {
  const [pokemonA, setPokemonA] = useState({
    name: "Bulbasaur",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    num: "1",
  });

  const [pokemonB, setPokemonB] = useState({
    name: "Charmander",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    num: "4",
  });

  const [pokemonC, setPokemonC] = useState({
    name: "Squirtle",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    num: "7",
  });

  const [pokemonD, setPokemonD] = useState({
    name: "Pikachu",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    num: "25",
  });

  const [pokemonE, setPokemonE] = useState({
    name: "Gastly",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    num: "92",
  });

  const [pokemon1, setPokemon1] = useState("1");
  const [pokemon2, setPokemon2] = useState("4");
  const [pokemon3, setPokemon3] = useState("7");
  const [pokemon4, setPokemon4] = useState("25");
  const [pokemon5, setPokemon5] = useState("92");
  const [numToCompare, setNumToCompare] = useState("2");

  function handleSelectChange(value) {
    setNumToCompare(value);
  }

  const handleInputChange1 = (event) => {
    setPokemon1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setPokemon2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setPokemon3(event.target.value);
  };

  const handleInputChange4 = (event) => {
    setPokemon4(event.target.value);
  };

  const handleInputChange5 = (event) => {
    setPokemon5(event.target.value);
  };

  function searchPokemon() {
    fetchPokemonData(pokemon1, setPokemonA);
    fetchPokemonData(pokemon2, setPokemonB);
    fetchPokemonData(pokemon3, setPokemonC);
    fetchPokemonData(pokemon4, setPokemonD);
    fetchPokemonData(pokemon5, setPokemonE);
  }

  function capitalizeFirstLetterOfWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  function formatPokemonNumber(number) {
    if (number < 10) {
      return `00${number}`;
    } else if (number < 100) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

  async function fetchPokemonData(nameOrNumber, setterFunction) {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrNumber}`
    );
    const data = await res.json();
    setterFunction((prevState) => ({
      ...prevState,
      name: capitalizeFirstLetterOfWords(data.forms[0].name),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      num: data.id,
    }));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    searchPokemon();
  }, []);

  return (
    <div className="flex flex-col m-3">
      <div>
        <h1 className="text-xl text-left font-bold my-2">Compare Pokemon</h1>
        <h3 className="my-2">
          Search for different Pokemon using either their name or number and
          compare their stats below.
        </h3>
        <div className="my-2">
          <span className="pr-2">Number of Pokemon to compare:</span>
          <SelectNumberToCompare onSelectChange={handleSelectChange} />
        </div>
        <Space direction="vertical" size="middle">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Pokemon 1"
              value={pokemon1}
              onChange={handleInputChange1}
            />
            <Input
              placeholder="Pokemon 2"
              value={pokemon2}
              onChange={handleInputChange2}
            />
            {Number(numToCompare) >= 3 && (
              <Input
                placeholder="Pokemon 3"
                value={pokemon3}
                onChange={handleInputChange3}
              />
            )}
            {Number(numToCompare) >= 4 && (
              <Input
                placeholder="Pokemon 4"
                value={pokemon4}
                onChange={handleInputChange4}
              />
            )}
            {Number(numToCompare) === 5 && (
              <Input
                placeholder="Pokemon 5"
                value={pokemon5}
                onChange={handleInputChange5}
              />
            )}
            <Button type="default" onClick={() => searchPokemon()}>
              Search
            </Button>
          </Space.Compact>
        </Space>
        <Divider />
      </div>
      <div className="flex">
        <div className="px-1">
          <h1 className="text-lg font-bold">{pokemonA.name}</h1>
          <p className="italic">{formatPokemonNumber(pokemonA.num)} </p>
          <PokemonCardImage
            pokemonID={formatPokemonNumber(pokemonA.num)}
            className="-ml-3"
          />
          <h2>HP: {pokemonA.hp}</h2>
          <h2>Attack: {pokemonA.attack}</h2>
          <h2>Defense: {pokemonA.defense}</h2>
          <h2>Special Attack: {pokemonA.specialAttack}</h2>
          <h2>Special Defense: {pokemonA.specialDefense}</h2>
          <h2>Speed: {pokemonA.speed}</h2>
          <h2>
            <strong>
              Base Stat Total:{" "}
              {pokemonA.hp +
                pokemonA.attack +
                pokemonA.defense +
                pokemonA.specialAttack +
                pokemonA.specialDefense +
                pokemonA.speed}
            </strong>{" "}
          </h2>
        </div>
        <div className="px-1">
          <h1 className="text-lg font-bold">{pokemonB.name}</h1>
          <p className="italic">{formatPokemonNumber(pokemonB.num)} </p>
          <PokemonCardImage pokemonID={formatPokemonNumber(pokemonB.num)} />
          <h2>HP: {pokemonB.hp}</h2>
          <h2>Attack: {pokemonB.attack}</h2>
          <h2>Defense: {pokemonB.defense}</h2>
          <h2>Special Attack: {pokemonB.specialAttack}</h2>
          <h2>Special Defense: {pokemonB.specialDefense}</h2>
          <h2>Speed: {pokemonB.speed}</h2>
          <h2>
            <strong>
              Base Stat Total:{" "}
              {pokemonB.hp +
                pokemonB.attack +
                pokemonB.defense +
                pokemonB.specialAttack +
                pokemonB.specialDefense +
                pokemonB.speed}
            </strong>
          </h2>
        </div>
        {Number(numToCompare) >= 3 && (
          <div className="px-1">
            <h1 className="text-lg font-bold">{pokemonC.name}</h1>
            <p className="italic">{formatPokemonNumber(pokemonC.num)} </p>
            <PokemonCardImage pokemonID={formatPokemonNumber(pokemonC.num)} />
            <h2>HP: {pokemonC.hp}</h2>
            <h2>Attack: {pokemonC.attack}</h2>
            <h2>Defense: {pokemonC.defense}</h2>
            <h2>Special Attack: {pokemonC.specialAttack}</h2>
            <h2>Special Defense: {pokemonC.specialDefense}</h2>
            <h2>Speed: {pokemonC.speed}</h2>
            <h2>
              <strong>
                Base Stat Total:{" "}
                {pokemonC.hp +
                  pokemonC.attack +
                  pokemonC.defense +
                  pokemonC.specialAttack +
                  pokemonC.specialDefense +
                  pokemonC.speed}
              </strong>
            </h2>
          </div>
        )}
        {Number(numToCompare) >= 4 && (
          <div className="px-1">
            <h1 className="text-lg font-bold">{pokemonD.name}</h1>
            <p className="italic">{formatPokemonNumber(pokemonD.num)} </p>
            <PokemonCardImage pokemonID={formatPokemonNumber(pokemonD.num)} />
            <h2>HP: {pokemonD.hp}</h2>
            <h2>Attack: {pokemonD.attack}</h2>
            <h2>Defense: {pokemonD.defense}</h2>
            <h2>Special Attack: {pokemonD.specialAttack}</h2>
            <h2>Special Defense: {pokemonD.specialDefense}</h2>
            <h2>Speed: {pokemonD.speed}</h2>
            <h2>
              <strong>
                Base Stat Total:{" "}
                {pokemonD.hp +
                  pokemonD.attack +
                  pokemonD.defense +
                  pokemonD.specialAttack +
                  pokemonD.specialDefense +
                  pokemonD.speed}
              </strong>
            </h2>
          </div>
        )}
        {Number(numToCompare) === 5 && (
          <div className="px-1">
            <h1 className="text-lg font-bold">{pokemonE.name}</h1>
            <p className="italic">{formatPokemonNumber(pokemonE.num)} </p>
            <PokemonCardImage pokemonID={formatPokemonNumber(pokemonE.num)} />
            <h2>HP: {pokemonE.hp}</h2>
            <h2>Attack: {pokemonE.attack}</h2>
            <h2>Defense: {pokemonE.defense}</h2>
            <h2>Special Attack: {pokemonE.specialAttack}</h2>
            <h2>Special Defense: {pokemonE.specialDefense}</h2>
            <h2>Speed: {pokemonE.speed}</h2>
            <h2>
              <strong>
                Base Stat Total:{" "}
                {pokemonE.hp +
                  pokemonE.attack +
                  pokemonE.defense +
                  pokemonE.specialAttack +
                  pokemonE.specialDefense +
                  pokemonE.speed}
              </strong>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

function SelectNumberToCompare({ onSelectChange }) {
  return (
    <Select
      defaultValue="2"
      style={{ width: 120 }}
      onChange={onSelectChange}
      options={[
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ]}
    />
  );
}

export default ComparePokemon;

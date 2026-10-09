import type { Pokemon } from "../types/pokemon";

export const samplePokemon: Pokemon[] = [
  {
    id: 25,
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["electric"],
    height: 4,
    weight: 60,
    abilities: ["static", "lightning-rod"],
  },
  {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
    height: 7,
    weight: 69,
    abilities: ["overgrow", "chlorophyll"],
  },
  {
    id: 6,
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: ["fire", "flying"],
    height: 17,
    weight: 905,
    abilities: ["blaze", "solar-power"],
  },
];
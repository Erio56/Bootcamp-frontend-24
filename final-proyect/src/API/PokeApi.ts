import { ISpecieResult } from "./models/ISpeciesReturn";

const getPokemonList = () => {
   return fetch('https://pokeapi.co/api/v2/pokemon-species?limit=100') as unknown as ISpecieResult;
}

export const getRandomPokemons = async () => {
   const pokemons = await getPokemonList();
   const randomPokemons = pokemons.results.sort(() => 0.5 - Math.random()).slice(0, 4);

   return randomPokemons;
}
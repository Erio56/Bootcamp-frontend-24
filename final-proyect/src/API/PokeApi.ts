import { ISpecieResult } from "./models/ISpeciesReturn";


export const getRandomPokemons = async () => {
   const speciesResponse = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=100');
   const species = await speciesResponse.json() as ISpecieResult;

   return species;
}
import { useEffect, useState } from "react";
import { SpecieResult } from "./models/SpecieReturn";
import { Pokemon } from "./models/Pokemon";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  function getRandomNumber(): number {
    return Math.floor(Math.random() * 200) + 1;
  }
	
  const randomNumber = getRandomNumber();
	
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species??offset=${randomNumber}&limit=20`)
      .then((response) => response.json())
      .then((data: SpecieResult) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        return Promise.all(promises);
      })
      .then((pokemons: Pokemon[]) => {
        const results = pokemons.map((pokemon) => ({
					id: pokemon.id,
          name: pokemon.name,
          names: pokemon.names
        }));
        setPokemon(results);
      })
      .catch((err) => setError("Failed to fetch Pokémon data"));
  }, []);

  return { pokemon, error };
};

export default usePokemon;

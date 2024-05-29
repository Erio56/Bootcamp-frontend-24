import { useEffect, useState } from "react";
import { Pokemon } from "./models/Pokemon";

function getRandomNumber(): number {
  return Math.floor(Math.random() * 898) + 1; // As of now, there are 898 Pokémon species.
}

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomPokemonSpecies = async () => {
      try {
        const randomNumbers = Array.from({ length: 4 }, () => getRandomNumber());
        const promises = randomNumbers.map((number) =>
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}`).then((response) => response.json())
        );
        const results = await Promise.all(promises);

        const formattedResults = results.map((specie: Pokemon) => ({
          id: specie.id,
          name: specie.name,
          names: specie.names
        }));

        setPokemons(formattedResults);
      } catch (err) {
        setError("Failed to fetch Pokémon data");
      }
    };

    fetchRandomPokemonSpecies();
  }, []);

  return { pokemons, error };
};

export default usePokemon;

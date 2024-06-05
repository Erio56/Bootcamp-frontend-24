import { useState, useEffect } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export const usePokedex = (limit: number, initialOffset: number) => {
  console.log("i'm running")

  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(initialOffset);

  const getPokemons = async (limit: number, offset: number): Promise<Pokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();
    return data.results as Pokemon[];
  };

  const getPokemonDetail = async (url: string): Promise<PokemonDetail> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch pokemon detail');
    }
    const data = await response.json();
    return data as PokemonDetail;
  };

  const loadMorePokemons = async () => {
    setLoading(true);
    try {
      const newPokemons = await getPokemons(limit, currentOffset);
      const detailedPokemons = await Promise.all(newPokemons.map(pokemon => getPokemonDetail(pokemon.url)));
      setPokemons([...pokemons, ...detailedPokemons]);
      console.log("set pokemons")
      setCurrentOffset(prevOffset => prevOffset + limit);
    } catch (err) {
      setError('Failed to fetch Pokémons');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMorePokemons();

    return () => {
      console.log("unset pokemons")
      setPokemons([])
    }
  }, []);

  return { pokemons, loading, error, loadMorePokemons };
};

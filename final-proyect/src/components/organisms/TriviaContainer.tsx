import { useContext, useEffect, useState } from "react";
import usePokemon from "../../API/PokeApi";
import PokemonImage from "../atoms/PokemonImage";
import TriviaButton from "../atoms/TriviaButton";
import { Pokemon } from "../../API/models/Pokemon";
import { GeneralContext } from "../../contexts/GeneralContex";

const TriviaContainer = () => {
  
  const [triviaPokemon, setTriviaPokemon] = useState<Pokemon | null>(null);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);

  const { pokemons, error } = usePokemon(tries);
  
  useEffect(() => {
    if (pokemons.length > 0) {
      setTriviaPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
  }, [pokemons]);

  const handleClick = (pokemonId: number) => {
    setTries(tries + 1);

    if (pokemonId === triviaPokemon?.id) {
      setScore(score + 1);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {triviaPokemon && <PokemonImage pokemonId={triviaPokemon.id} />}
      {pokemons.map((pokemon) => (
        <TriviaButton 
          key={pokemon.id} 
          pokemon={pokemon} 
          handleOnClick={() => handleClick(pokemon.id)} 
        />
      ))}
    </div>
  );
}

export default TriviaContainer;

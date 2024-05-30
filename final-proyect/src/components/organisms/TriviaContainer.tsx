import { useEffect, useState } from "react";
import usePokemon from "../../API/PokeApi";
import PokemonImage from "../atoms/PokemonImage";
import TriviaButton from "../atoms/TriviaButton";
import { Pokemon } from "../../API/models/Pokemon";
import GameOverPopUp from "../molecules/GameOverPopUp";

const TriviaContainer = () => {
  const [triviaPokemon, setTriviaPokemon] = useState<Pokemon | null>(null);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);

  const { pokemons, error } = usePokemon(tries);

  useEffect(() => {
    if (score <= 3) {
      setTriviaPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
  }, [pokemons, score]);

  const handleClick = (pokemonId: number) => {
    if (tries <= 3) {
      setTries(tries + 1);

      if (pokemonId === triviaPokemon?.id) {
        setScore(score + 1);
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tries === 3 && <GameOverPopUp score={score}/>}
      {tries < 3 && (
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
      )}
    </div>
  );
};

export default TriviaContainer;

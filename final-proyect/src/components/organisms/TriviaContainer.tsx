import { useEffect, useState } from "react";
import usePokemon from "../../API/PokeApi";
import PokemonImage from "../atoms/PokemonImage";
import TriviaButton from "../atoms/TriviaButton";
import { Pokemon } from "../../API/models/Pokemon";

const TriviaContainer = () => {

   const { pokemons, error } = usePokemon();
   
   const [triviaPokemon, setTriviaPokemon] = useState<Pokemon | null>(null)
   const [score, setScore] = useState(0);
   const [tries, setTries] = useState(0);

   useEffect(() => {
      setTriviaPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
   }, [pokemons])

   const handleClick = (pokemonId: number) => {
      setTries( tries + 1);

      if(pokemonId === triviaPokemon?.id){
         setScore(score + 1);
      }
   }
   

   return (
      <div>
         <p>{JSON.stringify(triviaPokemon)}</p>
         <p>{score}</p>
         <p>{tries}</p>
         <PokemonImage pokemonId={triviaPokemon?.id}/>
         <TriviaButton buttonName="test" handleOnClick={() => { handleClick(pokemons[0].id) }}/>
         <TriviaButton buttonName="test" handleOnClick={() => { handleClick(pokemons[1].id) }}/>
         <TriviaButton buttonName="test" handleOnClick={() => { handleClick(pokemons[2].id) }}/>
      </div>
   )
}

export default TriviaContainer;
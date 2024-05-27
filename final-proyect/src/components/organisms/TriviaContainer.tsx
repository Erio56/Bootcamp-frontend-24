import PokemonImage from "../atoms/PokemonImage";
import TriviaButton from "../atoms/TriviaButton";

const TriviaContainer = () => {

   return (
      <div>
         <PokemonImage/>
         <TriviaButton/>
         <TriviaButton/>
         <TriviaButton/>
      </div>
   )
}

export default TriviaContainer;
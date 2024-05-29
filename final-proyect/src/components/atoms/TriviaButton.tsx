import { useContext } from "react";
import { Pokemon } from "../../API/models/Pokemon";
import { GeneralContext } from "../../contexts/GeneralContex";

type TriviaButtonProps = {
   pokemon: Pokemon,
   handleOnClick: () => void
}

const TriviaButton = (props : TriviaButtonProps) => {
   const { currentLanguage } = useContext(GeneralContext);


   return (
      <button onClick={props.handleOnClick} type="button"> { props.pokemon.names.find(name => name.language.name === currentLanguage)?.name || props.pokemon.name } </button>
   )
}

export default TriviaButton;
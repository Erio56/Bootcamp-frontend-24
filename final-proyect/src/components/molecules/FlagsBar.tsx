import { useContext } from "react";
import FlagContainer from "../atoms/FlagContainer"
import { GeneralContext } from "../../contexts/GeneralContex";

const FlagsBar = () => {

   const languages = useContext(GeneralContext).languages;

   return (
      <div>
         <div>
            {JSON.stringify(languages)}
            <label htmlFor="language">Choose a language:</label>
            <select name="language" id="language">
               { languages.map( (l) => (<option value={l.name}>{l.name}</option>)) }
            </select>
         </div>

         <FlagContainer flagImage={"assets/flags/spain.svg"} />
         <FlagContainer flagImage={"assets/flags/spain.svg"}/>
         <FlagContainer flagImage={"assets/flags/spain.svg"}/>
      </div>
   )
}

export default FlagsBar;
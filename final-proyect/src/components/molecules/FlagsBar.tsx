import { useContext } from "react";
import FlagContainer from "../atoms/FlagContainer";
import { GeneralContext } from "../../contexts/GeneralContex";
import useLanguages from "../../API/LanguageDetails";

const FlagsBar = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);

  const { loading, languages } = useLanguages();

  return (
    <div>
      <div>
        <label htmlFor="language">Choose a language:</label>
         <select name="language" id="language">
            {languages.map(l =>  <option>{l.names.find( x => x.language.name === currentLanguage)?.name || l.name}</option>)}
         </select>

      </div>

      <FlagContainer flagImage={"assets/flags/spain.svg"} />
      <FlagContainer flagImage={"assets/flags/spain.svg"} />
      <FlagContainer flagImage={"assets/flags/spain.svg"} />
    </div>
  );
};

export default FlagsBar;

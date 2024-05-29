import { useContext } from "react";
import FlagContainer from "../atoms/FlagContainer";
import { GeneralContext } from "../../contexts/GeneralContex";
import useLanguages from "../../API/LanguageDetails";

const FlagsBar = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);

  return (
    <div>


      <FlagContainer flagImage={"assets/flags/spain.svg"} />
      <FlagContainer flagImage={"assets/flags/spain.svg"} />
      <FlagContainer flagImage={"assets/flags/spain.svg"} />
    </div>
  );
};

export default FlagsBar;

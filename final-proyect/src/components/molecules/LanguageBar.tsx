import { useState } from "react";
import FlagContainer from "../atoms/FlagContainer";
import LanguageSelector from "../atoms/LanguageSelector";

const FlagsBar = () => {

  const [selectedLanguages, setSelectedLanguages] = useState(['en','ja-Hrkt'])

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguages(selectedLanguages.concat(e.target.value))
  }

  return (
    <div>
      <LanguageSelector handleOnChange={handleSelectLanguage}/>

      <div>
        {selectedLanguages.map(selectedLanguage => <FlagContainer flagImage={"assets/flags/spain.svg"} languageName={selectedLanguage} key={selectedLanguage}/>)}
      </div>
    </div>
  );
};

export default FlagsBar;

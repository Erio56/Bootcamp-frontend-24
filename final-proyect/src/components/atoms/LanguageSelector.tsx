import { useContext } from "react";
import useLanguages from "../../API/LanguageDetails";
import { GeneralContext } from "../../contexts/GeneralContex";

type LanguageSelectorProps = {
   handleOnChange: (e:React.ChangeEvent<HTMLSelectElement>)=>void
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);
  const { loading, languages } = useLanguages();

  return (
    <div>
      <div>Current language {currentLanguage}</div>
      <label htmlFor="language">Choose a language:</label>
      <select name="language" id="language" onChange={(e) => props.handleOnChange(e)}>
        {languages.map((l) => (
          <option key={l.id} value={l.name}>
            {l.names.find((x) => x.language.name === currentLanguage)?.name ||
              l.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

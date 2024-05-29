import { useContext } from "react";
import useLanguages from "../../API/LanguageDetails";
import { GeneralContext } from "../../contexts/GeneralContex";

const LanguageSelector = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);
  const { loading, languages } = useLanguages();

  return (
    <div>
      <label htmlFor="language">Choose a language:</label>
      <select name="language" id="language">
        {languages.map((l) => (
          <option>
            {l.names.find((x) => x.language.name === currentLanguage)?.name ||
              l.name}
          </option>
        ))}
      </select>
    </div>
  );
};

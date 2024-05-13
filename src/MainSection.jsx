import { useContext } from "react"
import { LanguagesContext } from "./LanguagesContext";

export default function MainSection() {

   const languagesContext = useContext(LanguagesContext);

   const handleClick = () => {
      const revesedArray = languagesContext.languages.reverse();
      console.log(languagesContext);   
      languagesContext.setLanguages(revesedArray);
   }

   return (
     <div>
      <p>{languagesContext.languages[0]}</p>
       <p id="favoriteLanguage">favorite programing language: {languagesContext.languages[0]}</p>
       <button id="changeFavorite" onClick={handleClick}>toggle language</button>
     </div>
   )
}
  
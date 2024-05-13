import { useContext } from "react"
import languageContext from "./LanguagesContext"

export default function MainSection() {

   const languages = useContext(languageContext)

   return (
     <div>
       <p id="favoriteLanguage">favorite programing language: {languages[0]}</p>
       <button id="changeFavorite">toggle language</button>
     </div>
   )
}
  
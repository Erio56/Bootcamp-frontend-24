import { useContext } from "react"

export default function MainSection() {

   const languages = useContext()

   return (
     <div>
       <p id="favoriteLanguage">favorite programing language: {languages[0]}</p>
       <button id="changeFavorite">toggle language</button>
     </div>
   )
}
  
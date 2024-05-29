import { useEffect, useState } from "react";
import { Language, LanguageResponse } from "./models/LanguagesReturn";

const useLanguages = () => {

   const [languages, setlanguages] = useState<Language[]>([]) 

   useEffect(() => {
     fetch("https://pokeapi.co/api/v2/language/").then(
      (respose) => {
         respose.json().then(
            (langages: LanguageResponse) => {
               setlanguages(langages.results)
            }
         )
      }
     )

   }, [])
   

   return languages;
}

export default useLanguages;
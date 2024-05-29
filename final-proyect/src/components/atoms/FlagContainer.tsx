import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContex";

interface FlagContainer {
   languageName: string
   flagImage: string
}

const FlagContainer = (props: FlagContainer) => {
   const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);

   const handleClick = (language: string) => {
     setCurrentLanguage(language);
   }  


   return (
      <div onClick={() => { handleClick(props.languageName) }}>
         <img src={props.flagImage} alt="" width={150} />
         <p>{props.languageName}</p>
      </div>
   )
}

export default FlagContainer;
import { GeneralContext } from "./GeneralContex";
import { useState } from "react";

type Props =  {
   children: React.ReactNode;
}

const GeneralContextProvider = ({ children }: Props) => {
   const [currentLanguage, setCurrentLanguage] = useState("en")

  return (
    <div>
      <GeneralContext.Provider value={{ currentLanguage, setCurrentLanguage }}> {children} </GeneralContext.Provider>
    </div>
  );
}

export default GeneralContextProvider;
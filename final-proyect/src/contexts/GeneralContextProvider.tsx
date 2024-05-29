import { GeneralContext } from "./GeneralContex";
import { useState } from "react";
import { LanguageDetail } from "../API/models/LanguageDetailsReturn";

type Props =  {
   children: React.ReactNode;
}

const GeneralContextProvider = ({ children }: Props) => {
   const [currentLanguage, setCurrentLanguage] = useState<LanguageDetail | null >(null)

  return (
    <div>
      <GeneralContext.Provider value={{ currentLanguage, setCurrentLanguage }}> {children} </GeneralContext.Provider>
    </div>
  );
}

export default GeneralContextProvider;
import { useState } from "react";
import { GeneralContext } from "./GeneralContex";

type Props =  {
   children: React.ReactNode;
}
 
const GeneralContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <GeneralContext.Provider value={{ language, setLanguage }}> {children} </GeneralContext.Provider>
    </div>
  );
}

export default GeneralContextProvider;
import { GeneralContext } from "./GeneralContex";
import useLanguages from "../API/Langage";

type Props =  {
   children: React.ReactNode;
}

const GeneralContextProvider = ({ children }: Props) => {
   const languages = useLanguages();

  return (
    <div>
      <GeneralContext.Provider value={{ languages }}> {children} </GeneralContext.Provider>
    </div>
  );
}

export default GeneralContextProvider;
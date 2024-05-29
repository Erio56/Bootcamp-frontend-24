import { createContext, Dispatch, SetStateAction } from 'react';


type SetStateType = Dispatch<SetStateAction<string>>;
export interface GeneralContext {
   currentLanguage: string;
   setCurrentLanguage: SetStateType | null;
}


export const GeneralContext = createContext<GeneralContext | null>(null);

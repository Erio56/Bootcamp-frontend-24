import { createContext, Dispatch, SetStateAction } from 'react';
import { LanguageDetail } from '../API/models/LanguageDetailsReturn';


type SetStateType = Dispatch<SetStateAction<LanguageDetail | null>>;
export interface GeneralContext {
   currentLanguage: LanguageDetail | null;
   setCurrentLanguage: null | SetStateType;
}


export const GeneralContext = createContext<GeneralContext>({
   currentLanguage: null,
   setCurrentLanguage: null
});

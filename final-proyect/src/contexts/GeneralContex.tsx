import { createContext } from 'react';
import { Language } from '../API/models/LanguagesReturn';

export interface GeneralContext {
   languages: Language[]
}


export const GeneralContext = createContext<GeneralContext>({
   languages: []
});

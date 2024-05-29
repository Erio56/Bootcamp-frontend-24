export interface LanguageName {
   name: string;
   language: {
       name: string;
       url: string;
   };
}

export interface LanguageDetail {
   id: number;
   name: string;
   names: LanguageName[];
}

export interface LanguageListResponse {
   results: {
       name: string;
       url: string;
   }[];
}

// Represents a single language name in a specific language
export interface LanguageName {
   name: string;
   language: {
       name: string;
       url: string;
   };
}

// Represents detailed information about a language
export interface LanguageDetail {
   id: number;
   name: string;
   names: LanguageName[];
}

// Represents the response from the list of languages endpoint
export interface LanguageListResponse {
   results: {
       name: string;
       url: string;
   }[];
}

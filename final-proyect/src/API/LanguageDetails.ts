import { useState, useEffect } from 'react';
import { LanguageDetail, LanguageListResponse } from './models/LanguageDetailsReturn';

const useLanguages = () => {
    const [languages, setLanguages] = useState<LanguageDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/language/');
                const data: LanguageListResponse = await response.json();
                const languageList = data.results;

                const languageDetails: LanguageDetail[] = await Promise.all(
                    languageList.map(async (language) => {
                        const response = await fetch(language.url);
                        return response.json();
                    })
                );

                setLanguages(languageDetails);
            } catch (error) {
                console.error('Error fetching languages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguages();
    }, []);

    return { languages, loading };
};

export default useLanguages;

import { createContext, FunctionalComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { ScreenTranslations } from './LanguageType';
import { LangInitialState } from './LanguageInitalState';

// Type for translations based on your structure

// Type for the context value
interface LanguageContextProps {
  language: string;
  translations: ScreenTranslations; // Updated to use the new type
  setLanguage: (lang: string) => void;
}

// Default language
const defaultLanguage = 'en';
const previosLanguageKey = localStorage.getItem("Lang-key");

// Create the context with a default value
const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  translations: LangInitialState,
  setLanguage: () => {},
});

// Localization Provider component
export const LanguageProvider: FunctionalComponent = ({ children }) => {
  const [language, setLanguage] = useState<string>(previosLanguageKey?previosLanguageKey:defaultLanguage);
  const [translations, setTranslations] = useState<ScreenTranslations>(LangInitialState);

  // Load translations from the JSON file based on the selected language
  useEffect(() => {
    const loadTranslations = async (lang: string) => {
      try {
        const response = await import(`./locales/${lang}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

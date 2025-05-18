import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import translationsEs from '../data/translations.es.json';
import translationsPt from '../data/translations.pt.json';

const LanguageContext = createContext();

const allTranslations = {
  es: translationsEs,
  pt: translationsPt
};

export function LanguageProvider({ children }) {
  const getInitialLanguage = () => {
    const pathLang = window.location.pathname.split('/')[1];
    return (pathLang === 'es' || pathLang === 'pt') ? pathLang : 'es';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [translations, setTranslations] = useState(allTranslations[language]);

  const changeLanguage = (newLang) => {
    if (newLang !== language) {
      setLanguage(newLang);
      setTranslations(allTranslations[newLang]);
      const newPath = window.location.pathname.replace(/^\/[a-z]{2}/, `/${newLang}`);
      window.history.replaceState({}, '', newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}
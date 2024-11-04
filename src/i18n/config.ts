import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar los archivos de traducción
//import translationEN from './locales/en/translation.json';
// import translationES from './locales/es/translation.json';

const resources = {
  en: {
    translation: {
        "welcome": "Welcome"
      },
  },
  es: {
    translation: {
        "welcome": "Bienvenido"
      },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // idioma por defecto
    fallbackLng: 'en', // idioma de respaldo si falta una traducción
    
    interpolation: {
      escapeValue: false, // no es necesario para React
    },
    
    // opciones comunes de i18next
    debug: import.meta.env.DEV,
    supportedLngs: ['en', 'es'],
    
    react: {
      useSuspense: true,
    },
  });

export default i18n;

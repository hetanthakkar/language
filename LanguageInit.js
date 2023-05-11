import i18n from 'i18next';
// import en from 'i18next-english';
// import fr from 'i18next-french';
import {useContext} from 'react';
import {initReactI18next} from 'react-i18next';
import {LanguageContext} from './src/util/context/Appcontext';

const en = [
  {
    hello: 'Hello',
    world: 'World',
  },
];
const mr = [
  {
    hello: 'मराठी',
  },
];
const LanguageInitializer = () => {
  const {language} = useContext(LanguageContext);

  i18n.use(initReactI18next).init({
    resources: {
      en: {translation: en},
      mr: {translation: mr},
    },
    lng: language,
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
  });

  return null; // or any component you prefer
};

export default LanguageInitializer;

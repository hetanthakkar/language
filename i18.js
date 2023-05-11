import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';

// // Import the translation resources
// // import en from './locales/en.json';
// // import mr from './locales/mr.json';

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
const languageDetector = {
  type: 'languageDetector',
  async: true,

  detect: callback => {
    const {I18nManager} = NativeModules;
    const locale =
      Platform.OS === 'ios'
        ? I18nManager.localeIdentifier
        : I18nManager.localeIdentifier.replace('_', '-');

    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: en},
      mr: {translation: mr},
    },
    lng: 'en',
    fallbackLng: 'en', // Fallback language if the detected language is not available
    interpolation: {
      escapeValue: false, // Disable HTML escaping
    },
  });

export default i18n;

// import i18n from 'i18next';
// // import en from 'i18next-english';
// // import fr from 'i18next-french';
// import {useContext} from 'react';
// import {initReactI18next} from 'react-i18next';
// import {AppContext} from './src/util/context/Appcontext';

// const resources = {
//   en: {translation: en},
//   mr: {translation: mr},
// };

// const LanguageInitializer = () => {
//   const {language} = useContext(AppContext);
//   console.log('this is language', language);
//   i18n.use(initReactI18next).init({
//     resources,
//     lng: language,
//     fallbackLng: 'en',
//     interpolation: {escapeValue: false},
//   });

//   return null; // or any component you prefer
// };

// export default LanguageInitializer;

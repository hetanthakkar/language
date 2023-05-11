import i18n from 'i18n-js';

// const styles = StyleSheet.create({});
import React, {useContext, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../../util/LanguageContext';

const Profile = () => {
  const {language, setLanguage} = useContext(AppContext);

  const LANGUAGES = [
    {code: 'en', label: 'English'},
    {code: 'hi', label: 'मराठी'},
  ];
  // const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage1 = async code => {
    i18n.locale = code;

    await setLanguage(code);
    // i18n.locale = 'hi';
    // return i18n.changeLanguage(code);
  };

  useEffect(() => {
    if (language) {
      i18n.locale = language;
    } else {
      i18n.locale = 'en';
    }
  }, [language]);

  return (
    <View>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <Pressable
            style={{
              marginTop: 10,
            }}
            onPress={() => setLanguage1(language.code)}>
            <Text>{language.label}</Text>
          </Pressable>
        );
      })}
      <Text>{i18n.t('welcome')}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

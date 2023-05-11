import React, {useState} from 'react';

const AppContext = React.createContext({});

const ProfileProvider = props => {
  const [language, setLanguage] = useState('en');

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export {ProfileProvider, AppContext};

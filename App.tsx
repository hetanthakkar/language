import React from 'react';
import {StyleSheet, View} from 'react-native';
import './i18';
import AppNavigator from './src/router';

function App(): JSX.Element {
  return (
    <View style={styles.view}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

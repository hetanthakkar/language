import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Pagination = ({data}) => {
  return (
    <View
      style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
      {data.map((_, idx) => {
        return <View key={idx.toString()} style={styles.dot}></View>;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 6,
    backgroundColor: 'silver',
    marginHorizontal: 2,
  },
});

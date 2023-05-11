import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatList = ({renderItem, ...props}) => {
  return (
    <View>
      <FlatList renderItem={renderItem} {...props} />
    </View>
  );
};

export default FlatList;

const styles = StyleSheet.create({});

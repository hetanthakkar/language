import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const Slider = ({item}) => {
  return (
    <View>
      <Image
        source={item.image}
        resizeMode="contain"
        style={{
          width: 330,
          height: 200,
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../util/theme';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: horizontalScale(335),
        height: verticalScale(54),
        backgroundColor: '#F46F2E',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: 18,
        }}>
        Checkout
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});

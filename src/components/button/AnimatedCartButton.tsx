import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, verticalScale} from '../../util/theme';

const AnimatedCartButton = () => {
  const [num, setNum] = useState(0);
  return (
    <TouchableOpacity
      style={{
        marginLeft: 23,
        width: num > 0 ? 74 : horizontalScale(43),
        height: verticalScale(42),
        borderRadius: 16,
        backgroundColor: '#53B175',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      }}>
      {num > 0 ? (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            onPress={() => setNum(num - 1)}
            style={{
              color: 'white',

              fontSize: 18,
              fontWeight: '700',
            }}>
            -
          </Text>
          <Text
            style={{
              color: 'white',
              paddingLeft: horizontalScale(7),
              fontSize: 18,
              fontWeight: '700',
            }}>
            {num}
          </Text>
        </View>
      ) : null}
      <Text
        onPress={() => setNum(num + 1)}
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: 'white',
          alignSelf: 'center',
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
};

export default AnimatedCartButton;

const styles = StyleSheet.create({});

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';
import {ROUTES} from '../../router/utils';

const Splash = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop: verticalScale(23),
      }}>
      <Image
        resizeMode="contain"
        style={{
          width: horizontalScale(223),
          height: verticalScale(63),
          alignSelf: 'center',
        }}
        source={require('../../../assets/RK1.png')}
      />
      <View>
        <Image
          style={{
            width: horizontalScale(390),
            height: verticalScale(790),
            position: 'absolute',
          }}
          source={require('../../../assets/paper-bag.png')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: verticalScale(700),
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
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
              fontSize: moderateScale(18),
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

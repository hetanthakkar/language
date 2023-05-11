import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/button/Button';

import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';
import {ROUTES} from '../../router/utils';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(true);

  const onChanged = text => {
    // let newText = '';
    // let numbers = '0123456789';

    // for (var i = 0; i < text.length; i++) {
    //   if (numbers.indexOf(text[i]) > -1) {
    //     newText = newText + text[i];
    //   } else {
    //     // your call back function
    //     Alert.alert('Please enter numbers only');
    //   }
    // }

    setNumber(text);

    if (text.length === 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={{
          paddingTop: verticalScale(23),
          backgroundColor: 'white',
        }}>
        <View style={styles.parentContainer}>
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require('../../../assets/L1.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require('../../../assets/R1.png')}
          />
        </View>
        <Image
          resizeMode="contain"
          style={styles.imageTwoContainer}
          source={require('../../../assets/RK1.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require('../../../assets/L2.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.imageContainer}
            source={require('../../../assets/R2.png')}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: moderateScale(13),
              alignSelf: 'flex-start',
              marginLeft: horizontalScale(30),
              color: 'black',
            }}>
            Enter mobile number
          </Text>

          <View
            style={{
              marginVertical: verticalScale(9),
              alignItems: 'center',
              flexDirection: 'row',

              width: horizontalScale(335),
              height: verticalScale(54),
              borderWidth: horizontalScale(1),
              borderColor: disabled == true ? 'silver' : '#F46F2E',
              borderRadius: 10,
            }}>
            <Text style={{marginHorizontal: 10, color: 'black'}}>+91</Text>
            <TextInput
              onChangeText={text => onChanged(text)}
              value={number}
              keyboardType="numeric"
              maxLength={10}
              style={{
                marginHorizontal: horizontalScale(10),
                width: horizontalScale(279),
                height: verticalScale(54),
                color: 'black',
              }}
              placeholder="0000-0000-00"></TextInput>
          </View>
          <TouchableOpacity
            disabled={disabled}
            key={number}
            onPress={() => {
              navigation.navigate(ROUTES.HOME);
            }}
            style={{
              width: horizontalScale(335),
              height: verticalScale(54),
              backgroundColor: disabled == true ? 'silver' : '#F46F2E',
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
              Continue
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: verticalScale(15),
            }}>
            <View
              style={{
                borderBottomWidth: horizontalScale(1),
                borderColor: 'black',
                width: horizontalScale(100),
              }}></View>
            <Text
              style={{marginHorizontal: horizontalScale(23), color: 'black'}}>
              Or login with
            </Text>
            <View
              style={{
                borderBottomWidth: 1,

                borderColor: 'black',
                width: horizontalScale(100),
              }}></View>
          </View>
          <TouchableOpacity
            style={{
              marginVertical: verticalScale(4),
              alignItems: 'center',
              flexDirection: 'row',
              width: horizontalScale(335),

              height: verticalScale(54),
              borderRadius: 10,
              backgroundColor: '#2D9CDB',
            }}>
            <FontAwesome
              style={{
                marginLeft: horizontalScale(20),
                color: 'blue',
              }}
              size={30}
              name="facebook-square"
              onPress={() => console.log('djwncw')}></FontAwesome>

            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: moderateScale(17),
                marginLeft: horizontalScale(30),
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: horizontalScale(80),
    height: verticalScale(180),
  },
  imageTwoContainer: {
    alignSelf: 'center',
    width: horizontalScale(223),
    height: verticalScale(63),
  },
});

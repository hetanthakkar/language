import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Evil from 'react-native-vector-icons/Feather';
import Ioni from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';

const ReviewScreen = ({navigation}) => {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginBottom: verticalScale(8),
          width: '100%',
          height: '16%',
          backgroundColor: '#F46F2E',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(20),
            marginLeft: horizontalScale(15),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={{
                color: 'white',
              }}
              size={20}
              name="left"
              onPress={() => console.log('djwncw')}></Icon>
          </TouchableOpacity>

          <Image
            style={{
              alignSelf: 'center',
              width: horizontalScale(130),
              height: verticalScale(38),
              marginLeft: horizontalScale(78),
            }}
            resizeMode="contain"
            source={require('../../../assets/RKE2.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: horizontalScale(12),
            marginVertical: verticalScale(6),
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: horizontalScale(10),
            }}>
            <Ioni
              style={{
                color: 'white',
              }}
              size={15}
              name="location-outline"></Ioni>
            <Text
              style={{
                fontSize: moderateScale(11),
                color: 'white',
                marginLeft: horizontalScale(5),
                alignSelf: 'center',
              }}>
              Sent to
            </Text>
          </View>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginRight: horizontalScale(11),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: 'white',
                }}>
                Pamulang Barat Residance No.5, RT .....
              </Text>
              <Icon
                style={{
                  color: 'white',
                }}
                size={14}
                name="down"
                onPress={() => console.log('djwncw')}></Icon>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: horizontalScale(10),
        }}>
        <Text style={{fontSize: moderateScale(16), fontWeight: '600'}}>
          Write a Review
        </Text>
        <View
          style={{
            width: horizontalScale(336),
            height: verticalScale(150),
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            backgroundColor: 'white',
            elevation: 5,

            borderRadius: 8,
            alignSelf: 'center',
            marginVertical: verticalScale(10),
          }}></View>

        <Text style={{fontSize: 16, fontWeight: '600'}}>Give Your Ratings</Text>

        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
          defaultRating={1}
          size={20}
        />
        <TextInput
          multiline={true}
          style={{
            paddingLeft: horizontalScale(5),
            paddingTop: verticalScale(20),
            justifyContent: 'center',
            alignSelf: 'center',

            width: horizontalScale(336),
            height: verticalScale(93),
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            backgroundColor: 'white',
            elevation: 5,

            borderRadius: 8,
            marginVertical: verticalScale(24),
          }}
        />
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Button />
        </View>
      </View>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({});

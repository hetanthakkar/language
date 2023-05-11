import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, deleteItemFromCart} from '../../redux/action';
import {horizontalScale, verticalScale} from '../../util/theme';

const BasketIcon = ({onPress}) => {
  const addToCartHandler = item => {
    console.log(item);

    dispatch(addToCart(item));
  };

  const [cartItems, setCartItems] = useState(0);
  const cartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  const handleDelete = item => {
    dispatch(deleteItemFromCart(item));
  };

  const dispatch = useDispatch();

  const getQuantity = cartData => {
    let count = 0;
    let arr = [...cartData];
    for (let i = 0; i < arr.length; i++) {
      count = count + arr[i].quantity;
    }
    return count;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: Platform.OS == 'ios' ? verticalScale(690) : verticalScale(660),
        position: 'absolute',
        width: '93%',
        zIndex: 40,
        backgroundColor: '#53B175',
        borderRadius: 10,
        flexDirection: 'row',
        height: verticalScale(60),
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather
          style={{
            color: 'white',
          }}
          size={21}
          name="shopping-cart"
          backgroundColor="#53B175"
          onPress={() => console.log('djwncw')}
        />

        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 14,
            paddingLeft: horizontalScale(13),
          }}>
          {getQuantity(cartData)}
        </Text>

        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 14,
            paddingLeft: horizontalScale(6),
          }}>
          Item
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 14,
            paddingLeft: horizontalScale(3),
          }}>
          |
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 14,
            paddingLeft: horizontalScale(5),
          }}>
          Price
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 14,
            marginRight: horizontalScale(3),
          }}>
          Go to cart
        </Text>
        <AntDesign
          size={14}
          name="right"
          style={{
            color: 'white',
            fontWeight: '500',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({});

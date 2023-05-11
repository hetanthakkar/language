import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {horizontalScale, verticalScale, moderateScale} from '../../util/theme';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, deleteItemFromCart} from '../../redux/action';

const CartButton = ({onPress, style, item, num}) => {
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

  return (
    <View
      style={{
        flexDirection: 'row',
        width: horizontalScale(80),
        height: verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => handleDelete(item)}>
        <Text
          style={{
            borderWidth: 0.55,
            paddingHorizontal: horizontalScale(4),
            borderRadius: 3,
            borderColor: '#F46F2E',
            color: '#F46F2E',
          }}>
          -
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: horizontalScale(8),
        }}>
        <Text
          style={{
            paddingLeft: horizontalScale(6),
            fontSize: moderateScale(15),
            backgroundColor: '#fcedd2',
            width: horizontalScale(20),
            borderRadius: 6,
            color: '#F46F2E',
            fontWeight: '600',
          }}>
          {num}
        </Text>
      </View>
      <TouchableOpacity onPress={() => addToCartHandler(item)}>
        <Text
          style={{
            borderWidth: 0.55,
            paddingHorizontal: horizontalScale(4),
            borderRadius: 3,
            borderColor: '#F46F2E',
            color: '#F46F2E',
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});

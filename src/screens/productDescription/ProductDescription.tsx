import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {slides} from '../homescreen/slides';
import {orderagain} from '../homescreen/orderagain';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../util/theme';
import {ROUTES} from '../../router/utils';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/AntDesign';
import {addToCart, deleteItemFromCart} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import BasketIcon from '../basket/BasketIcon';

const ProductDescription = ({navigation, route}) => {
  const [liked, setLiked] = useState(true);
  const [less, setLess] = useState(true);
  const [description, setDescription] = useState(false);

  const {width} = useWindowDimensions();

  const {params} = route.params;
  const source = {
    html: params?.body_html,
  };

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

  const setless = () => {};

  const dispatch = useDispatch();

  console.log(params, 'hellow');

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <FlatList
        snapToAlignment="center"
        pagingEnabled={true}
        horizontal
        data={params?.images}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: verticalScale(500),
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: horizontalScale(200),
                  height: verticalScale(350),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={{uri: item?.src}}
              />
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 30,
          left: 20,
        }}
        onPress={() => navigation.goBack()}>
        <Icon
          style={{
            color: 'black',
          }}
          name="left"
          size={22}
        />
      </TouchableOpacity>
      <Pressable
        style={{
          position: 'absolute',
          right: horizontalScale(30),
          top: verticalScale(30),
        }}
        onPress={() => setLiked(isLiked => !isLiked)}>
        <Icon
          name={liked ? 'hearto' : 'heart'}
          size={22}
          color={liked ? 'black' : 'red'}
        />
      </Pressable>
      <ScrollView>
        <View
          style={{
            marginTop: verticalScale(60),
            backgroundColor: 'white',
            borderRadius: 31,
          }}>
          <View
            style={{
              paddingLeft: horizontalScale(20),
              paddingTop: verticalScale(10),
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#FDC040',
                }}>
                <Text
                  style={{
                    paddingHorizontal: horizontalScale(7),
                    color: 'black',
                    backgroundColor: '#FDC040',
                    paddingVertical: verticalScale(2),
                  }}>
                  {params?.tags.toLowerCase()}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: moderateScale(20),
                    fontWeight: '400',
                    color: 'black',
                    marginVertical: verticalScale(6),
                  }}>
                  {params?.title.length > 10
                    ? params?.title.slice(0, 10) + '...'
                    : params?.title}
                </Text>
                <Text
                  style={{
                    color: '#4CAD73',
                    fontSize: moderateScale(18),
                    fontWeight: '700',
                  }}>
                  {params?.variants[0]?.price} ₹
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: verticalScale(23),
                width:
                  cartData?.filter(e => e?.id == params?.id).length > 0 &&
                  cartData.length > 0
                    ? horizontalScale(73)
                    : horizontalScale(73),
                height: verticalScale(42),
                borderRadius: 16,
                backgroundColor: '#FDC040',
                justifyContent: 'space-evenly',

                flexDirection: 'row',
              }}>
              {cartData?.filter(e => e?.id == params?.id).length > 0 ? (
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    hitSlop={{
                      top: 20,
                      bottom: 20,
                      left: 10,
                    }}
                    onPress={() => handleDelete(params)}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: moderateScale(18),
                        fontWeight: '700',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      paddingLeft: horizontalScale(12),
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    {JSON.stringify(
                      cartData.length > 0
                        ? cartData?.filter(e => e?.id == params?.id).length
                        : 0,
                    )}
                  </Text>
                </View>
              ) : null}
              <TouchableOpacity
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'white',
                  alignSelf: 'center',
                }}
                onPress={() => {
                  addToCartHandler(params);
                }}
                hitSlop={{
                  top: 20,
                  bottom: 20,
                  right:
                    cartData?.filter(e => e?.id == params?.id).length > 0
                      ? 10
                      : 30,
                  left:
                    cartData?.filter(e => e?.id == params?.id).length > 0
                      ? 0
                      : 30,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'white',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View
              style={{
                marginTop: verticalScale(30),
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderBottomColor: '#BDBDBD',
                paddingBottom: verticalScale(15),
                borderBottomWidth: 0.6,
              }}>
              <TouchableOpacity onPress={() => setDescription(true)}>
                <Text
                  style={{
                    fontSize: moderateScale(16),
                    color: description ? '#FDC040' : 'black',
                  }}>
                  Description
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDescription(false)}>
                <Text
                  style={{
                    fontSize: moderateScale(16),

                    color: description ? 'black' : '#FDC040',
                  }}>
                  Nutrition facts
                </Text>
              </TouchableOpacity>
            </View>
            {description ? (
              <View>
                <View
                  style={{
                    paddingHorizontal: horizontalScale(30),
                    paddingTop: verticalScale(10),
                  }}>
                  <RenderHtml contentWidth={width} source={source} />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FDC040',
                    width: 80,
                    borderRadius: 4,
                    marginHorizontal: horizontalScale(24),
                  }}
                  onPress={() => setLess(isLiked => !isLiked)}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    {less ? 'Showless' : 'Showmore'}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: '700',
                marginTop: verticalScale(40),
                marginLeft: horizontalScale(10),
                paddingLeft: horizontalScale(20),
                marginBottom: verticalScale(20),

                color: 'black',
              }}>
              Related Products
            </Text>
            <FlatList
              horizontal
              data={orderagain}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push(ROUTES.PRODUCTDESCRIPTION, {
                        params: item,
                      })
                    }
                    style={{
                      marginVertical: verticalScale(12),
                      marginRight: horizontalScale(10),
                      borderRadius: 12,
                      marginLeft: horizontalScale(20),

                      width: horizontalScale(206),
                      height: verticalScale(93),
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 1},
                      shadowOpacity: 0.7,
                      shadowRadius: 2,
                      elevation: 10,
                      backgroundColor: 'white',
                    }}>
                    <Image
                      resizeMode="contain"
                      source={item.image}
                      style={{
                        width: horizontalScale(60),
                        height: verticalScale(70),
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          marginVertical: moderateScale(10),
                          color: 'black',
                          fontSize: moderateScale(17),
                          fontWeight: '600',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '600',
                        }}>
                        {item.price} ₹
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              height: 730,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({});

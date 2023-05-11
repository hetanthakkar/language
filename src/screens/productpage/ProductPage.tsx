import i18n from 'i18n-js';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getApi} from '../../hooks/useFetch';
import {addToCart, deleteItemFromCart} from '../../redux/action';
import {ROUTES} from '../../router/utils';
import {horizontalScale, verticalScale} from '../../util/theme';
import BasketIcon from '../basket/BasketIcon';

const ProductPage = props => {
  const addToCartHandler = item => {
    console.log('this is item 1', item);
    dispatch(addToCart(item));
  };

  const [cartItems, setCartItems] = useState(1);

  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [index, setIndex] = useState(0);
  const cartData = useSelector(state => state.reducer);
  console.warn(cartData);

  const setProductProducts = async () => {
    const data = await getApi(
      `https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/products.json?product_type=${props?.route?.params?.passedCategories?.title}`,
    );
    console.log(
      'hetlo',
      allProducts,
      props?.route?.params?.passedCategories?.id,
    );
    setAllProducts(data?.products);

    let sub = data?.products?.map(product => {
      return {
        title: product?.tags,
        image: product?.image?.src,
      };
    });

    const result = sub.reduce((acc, current) => {
      const duplicate = acc.find(item => item.title === current.title);
      if (!duplicate) {
        return [...acc, current];
      } else {
        return acc;
      }
    }, []);

    console.log('sub is', result);
    setSubCategories(result);

    let prod = data?.products?.filter(
      product => product?.tags == result[index]?.title,
    );
    console.log('thisss is prod', prod);
    setProducts(prod);
  };
  useEffect(() => {
    setProductProducts();

    setCartItems(cartData);
  }, [cartData]);
  const dispatch = useDispatch();

  const handleDelete = item => {
    dispatch(deleteItemFromCart(item));
  };
  const getQuantity = item => {
    // let temp = JSON.parse(JSON.stringify(cartData));
    let index = cartData.findIndex(obj => obj.id === item.id);
    let counter = cartData[index].quantity;
    return counter;
  };
  const {name} = props.route.params;
  return (
    <View
      style={{
        paddingTop: verticalScale(10),
        backgroundColor: 'white',
      }}>
      {cartData.length > 0 ? (
        <BasketIcon onPress={() => props?.navigation.navigate(ROUTES.BASKET)} />
      ) : null}
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: horizontalScale(10),

          borderBottomWidth: 0.5,
          paddingBottom: verticalScale(25),
        }}>
        <TouchableOpacity onPress={() => props?.navigation.goBack()}>
          <Icon
            style={{
              color: 'black',
            }}
            name="left"
            size={19}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 23,
            marginLeft: 10,
            fontWeight: '600',

            color: 'black',
          }}>
          {props?.route?.params?.passedCategories?.title}Het{i18n.t('welcome')}
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: horizontalScale(30),
            top: 7,
          }}>
          <Icon
            style={{
              color: 'black',
            }}
            name="search1"
            size={19}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1.1,
            // backgroundColor: 'red',
            paddingLeft: horizontalScale(10),
            flexDirection: 'row',
          }}>
          <FlatList
            data={subCategories}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    let prod = allProducts?.filter(
                      product => product?.tags == subCategories[index]?.title,
                    );
                    setProducts(prod);
                    setIndex(index);
                  }}
                  style={{
                    marginVertical: 25,
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      backgroundColor: '#eddfbe',
                      width: 43,
                      height: 43,
                      borderRadius: 10,
                    }}
                    source={{uri: item.image}}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      alignSelf: 'center',
                      fontSize: 14,
                    }}>
                    {item?.title.toLowerCase()}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View
            style={{
              width: 4,

              backgroundColor: '#F46F2E',
              height: verticalScale(120),
              position: 'absolute',
              top: 140 * index - 0,
              left: 75,
              borderRadius: 2,
            }}
          />
        </View>
        <View
          style={{
            flex: 6,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              style={{
                marginVertical: 10,
                width: horizontalScale(369),
                height: verticalScale(166),
              }}
              resizeMode="contain"
              source={{uri: props?.route?.params?.passedCategories?.image?.src}}
            />
            <ScrollView>
              <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        width: horizontalScale(128),
                        height: verticalScale(280),
                        borderRadius: 20,
                        marginHorizontal: horizontalScale(10),
                        marginVertical: verticalScale(10),
                        alignItems: 'center',
                        paddingLeft: horizontalScale(14),
                        paddingTop: verticalScale(5),
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 1},
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                        backgroundColor: 'white',
                        elevation: 5,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate(ROUTES.PRODUCTDESCRIPTION, {
                            params: item,
                          })
                        }>
                        <Image
                          style={{
                            width: horizontalScale(100),
                            height: verticalScale(70),
                          }}
                          resizeMode="contain"
                          source={{uri: item?.image?.src}}
                        />
                        <Text
                          style={{
                            fontSize: 17,
                            paddingTop: 9,
                          }}>
                          {item.title.length > 10
                            ? item.title.slice(0, 10) + '..'
                            : item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#767A78',
                          }}>
                          {item.handle.length > 10
                            ? item.handle.slice(0, 10) + '..'
                            : item.handle}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            paddingVertical: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: '#767A78',
                            }}>
                            {item.quantity}
                          </Text>

                          <Text
                            style={{
                              marginLeft: 32,
                              color: 'black',
                            }}>
                            {item?.variants[0]?.price} ₹
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          alignSelf: 'center',
                          marginTop: verticalScale(23),
                          width:
                            cartData?.filter(e => e?.id == item?.id).length >
                              0 && cartData.length > 0
                              ? 83
                              : horizontalScale(83),
                          height: verticalScale(42),
                          borderRadius: 16,
                          backgroundColor: '#53B175',
                          justifyContent: 'space-evenly',

                          flexDirection: 'row',
                        }}>
                        {cartData?.filter(e => e?.id == item?.id).length > 0 ? (
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
                              onPress={() => handleDelete(item)}>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 18,
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
                              {getQuantity(item)}
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
                            addToCartHandler(item);
                          }}
                          hitSlop={{
                            top: 20,
                            bottom: 20,
                            right:
                              cartData?.filter(e => e?.id == item?.id).length >
                              0
                                ? 10
                                : 30,
                            left:
                              cartData?.filter(e => e?.id == item?.id).length >
                              0
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
                  );
                }}
              />
              <View
                style={{
                  height: 730,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});

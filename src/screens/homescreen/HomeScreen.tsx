import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import '../../../i18';
import Slider from '../../components/slider/Slider';
import {slides} from './slides';

// Example to Use React Native Vector Icons
// https://aboutreact.com/react-native-vector-icons/

// Import required component
// Import vector icons
import i18n from 'i18n-js';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getApi, default as useFetch} from '../../hooks/useFetch';
import {addToCart, deleteItemFromCart} from '../../redux/action';
import {ROUTES} from '../../router/utils';
import {AppContext} from '../../util/LanguageContext';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';
import BasketIcon from '../basket/BasketIcon';
import translations from './translations';
i18n.translations = translations;

const HomeScreen = ({navigation}) => {
  const addToCartHandler = item => {
    console.log(item);

    dispatch(addToCart(item));
  };

  const LANGUAGES = [
    {code: 'en', label: 'English'},
    {code: 'hi', label: 'मराठी'},
  ];
  // const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  // i18n.locale = 'guj';
  const [cartItems, setCartItems] = useState(0);
  const [categories, setCategories] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(false);
  const {language, setLanguage} = useContext(AppContext);

  useEffect(() => {
    if (language) {
      i18n.locale = language;
    } else {
      i18n.locale = 'en';
    }
  }, [language]);
  const cartData = useSelector(state => state.reducer);
  // const fetchAllCategories = async () => {
  //   const data = await getApi(
  //     'https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/custom_collections.json',
  //   );
  //   console.log('thisss is data', data[0]);
  //   await setCategories(data?.custom_collections);
  // };

  const setLanguage1 = async code => {
    i18n.locale = code;

    await setLanguage(code);
    // i18n.locale = 'hi';
    // return i18n.changeLanguage(code);
  };
  // const fetchAll = async () => {
  //   await fetchAllCategories();
  //   console.log('cat lenght', categories.length);
  //   // const data = await getApi(
  //   //   'https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/custom_collections.json',
  //   // );
  //   // console.log('thisss is data', data);
  //   // await setCategories(data?.custom_collections);

  //   // const data1 = [...prod]; // Array to store the API response
  //   // console.log('cat length', data?.custom_collections?.length);
  //   // for (let i = 0; i < data?.custom_collections?.length; i++) {
  //   //   console.log('first', data?.custom_collections[i]?.title);
  //   //   try {
  //   //     const resp = await getApi(
  //   //       `https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/products.json?product_type=${data?.custom_collections[i]?.title}`,
  //   //     );
  //   //     console.log('ths is data', resp);
  //   //     let insert = [
  //   //       resp?.products[0],
  //   //       resp?.products[1],
  //   //       resp?.products[2],
  //   //       resp?.products[3],
  //   //     ];
  //   //     data1.push(insert);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }

  //   //   // Set the state with the fetched data
  //   //   setProd(data1);
  //   // }
  //   // // for (let i = 0; i < categories.length; i++) {
  //   // //   setProductProducts(categories[i]?.title);
  //   // // }
  // };

  const fetchRecentOrders = async () => {
    let email = 'minal.dumbre@rkbazar.in';
    const data = await getApi(
      `https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/orders.json?email=${email}`,
    );
    console.log('thisss is recentid', data?.orders[0]?.id);

    const b = [...new Set(data?.orders.flatMap(obj => obj.line_items))];

    setRecentOrders(b);
  };
  useEffect(() => {
    // fetchAll();
    fetchRecentOrders();
    setCartItems(cartData);
  }, [cartData]);
  // const init = async () => {
  //   const data = await getApi(
  //     'https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/custom_collections.json',
  //   );
  //   await setCategories(data?.custom_collections);

  //   // await fetchAll();
  //   await fetchRecentOrders();
  //   await setCartItems(cartData);
  // };
  // useEffect(() => {
  //   init();
  // }, [cartData]);

  // const fetchProds = async () => {
  //   if (categories.length > 0) {
  //     for (let i = 0; i < categories.length; i++) {
  //       const data = await getApi(
  //         `https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/products.json?product_type=${categories[i]?.title}`,
  //       );
  //       console.log('ths is data', data, 'iii', i);
  //       let temp = [...prod];
  //       temp.push([
  //         data?.products[0],
  //         data?.products[1],
  //         data?.products[2],
  //         data?.products[3],
  //       ]);
  //       setProd(temp);
  //       // setProductProducts(categories[i]?.title);
  //     }
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchProds();
  // }, [categories]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getApi(
          'https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/custom_collections.json',
        );
        setCategories(categoryData?.custom_collections);

        const productData = await fetchProductsBasedOnCategories(
          categoryData?.custom_collections,
        );
        setProd(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchProductsBasedOnCategories = async categories => {
    const productsData = [];

    for (const category of categories) {
      try {
        const response = await getApi(
          `https://rk-bazar-grocery.myshopify.com/admin/api/2023-04/products.json?product_type=${category?.title}`,
        );
        // const productData = await response.json();
        // response.products.slice(0, 4)
        productsData.push(...response.products.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    }

    return productsData;
  };
  const handleDelete = item => {
    dispatch(deleteItemFromCart(item));
  };

  const dispatch = useDispatch();
  const fetcher = useFetch;
  if (loading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <View
      style={{
        paddingTop: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        backgroundColor: 'white',
      }}>
      {cartData.length > 0 ? (
        <BasketIcon onPress={() => navigation.navigate(ROUTES.BASKET)} />
      ) : null}
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: horizontalScale(12),
            marginVertical: verticalScale(10),
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: horizontalScale(10),
            }}>
            <Ionicons size={moderateScale(14)} name="location-outline" />
            <Text
              style={{
                fontSize: moderateScale(12),
                color: 'black',
              }}>
              Sent to
            </Text>
          </View>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginRight: horizontalScale(12),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: 'black',
                }}>
                Pamulang Barat Residance No.5, RT .....
              </Text>
              <Icon
                size={moderateScale(15)}
                name="down"
                backgroundColor="white"
                onPress={() => console.log('djwncw')}
              />
            </View>
          </TouchableOpacity>
          <Image
            style={{
              width: horizontalScale(30),
              height: verticalScale(34),
              borderRadius: 120,
            }}
            source={require('../../../assets/abc.png')}
          />
        </View>
        <View
          style={{
            width: horizontalScale(336),
            height: verticalScale(50),
            borderRadius: 10,
            marginBottom: verticalScale(5),
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            backgroundColor: 'white',
            elevation: 5,
            flexDirection: 'row',
            marginLeft: horizontalScale(10),
          }}>
          <Icon
            style={{
              color: '#5c5655',
              paddingLeft: horizontalScale(15),
            }}
            name="search1"
            size={moderateScale(15)}
          />
          <TextInput
            style={{
              fontSize: moderateScale(15),
              paddingLeft: horizontalScale(10),
            }}
            placeholder={i18n.t('welcome')}
            placeholderTextColor={'#5c5655'}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={slides}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginTop: verticalScale(20),
                  paddingHorizontal: horizontalScale(20),
                  alignSelf: 'center',
                }}>
                <Slider item={item} />
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
          }}>
          {LANGUAGES.map(language => {
            const selectedLanguage = language.code === selectedLanguageCode;
            return (
              <Pressable
                style={{
                  marginTop: 10,
                }}
                onPress={() => setLanguage1(language.code)}>
                <Text>{language.label}</Text>
              </Pressable>
            );
          })}
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: '700',
              marginVertical: verticalScale(15),
              color: 'black',
            }}>
            Category{language}
          </Text>
          {categories?.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}>
              <FlatList
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={Math.ceil(categories.length / 2)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        navigation?.navigate(ROUTES.PRODUCTPAGE, {
                          passedCategories: item,
                        });
                      }}
                      style={{
                        marginHorizontal: horizontalScale(5),
                        marginVertical: verticalScale(10),
                        width: horizontalScale(80),
                        height: verticalScale(120),
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          backgroundColor: 'c',
                          width: horizontalScale(73),
                          height: verticalScale(74),
                          borderRadius: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: horizontalScale(60),
                            height: verticalScale(104),
                          }}
                          source={{uri: item?.image?.src}}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: moderateScale(13),
                          marginTop: verticalScale(8),
                          color: 'black',
                        }}>
                        {item.title.length > 10
                          ? item.title.slice(0, 10) + '..'
                          : item.title}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
          )}
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginVertical: verticalScale(5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: '700',
              marginVertical: verticalScale(15),
              color: 'black',
            }}>
            Order Again
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#F46F2E',
              }}>
              View all
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recentOrders}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  marginLeft: horizontalScale(4),
                  width: horizontalScale(148),
                  height: verticalScale(336),
                  paddingLeft: horizontalScale(9),
                  paddingTop: verticalScale(8),
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.PRODUCTDESCRIPTION, {
                      params: item,
                    })
                  }>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: horizontalScale(100),
                      height: verticalScale(90),
                    }}
                    source={item.image}
                  />

                  <Text
                    style={{
                      marginTop: verticalScale(23),
                      fontSize: moderateScale(18),
                      color: 'black',
                    }}>
                    {item.name.length > 10
                      ? item.name.slice(0, 10) + '..'
                      : item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: verticalScale(4),
                      fontSize: moderateScale(14),
                      color: '#767A78',
                    }}>
                    {item.companyname}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: verticalScale(15),

                    marginTop: verticalScale(23),
                  }}>
                  <Text
                    style={{
                      color: '#767A78',
                      marginRight: horizontalScale(25),
                    }}>
                    {item.quantity}
                  </Text>

                  <Text style={{color: 'black'}}>{item.price} ₹</Text>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: verticalScale(23),
                    width:
                      cartData?.filter(e => e?.id == item?.id).length > 0 &&
                      cartData.length > 0
                        ? horizontalScale(73)
                        : horizontalScale(73),
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
                          fontSize: moderateScale(18),
                          fontWeight: '700',
                        }}>
                        {JSON.stringify(
                          cartData.length > 0
                            ? cartData?.filter(e => e?.id == item?.id).length
                            : 0,
                        )}
                      </Text>
                    </View>
                  ) : null}
                  <TouchableOpacity
                    style={{
                      alignSelf: 'center',
                    }}
                    onPress={() => {
                      addToCartHandler(item);
                    }}
                    hitSlop={{
                      top: 20,
                      bottom: 20,
                      right:
                        cartData?.filter(e => e?.id == item?.id).length > 0
                          ? 10
                          : 30,
                      left:
                        cartData?.filter(e => e?.id == item?.id).length > 0
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
                {/* <TouchableOpacity
                    style={{
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: 'white',
                        alignSelf: 'center',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: 'white',
                      alignSelf: 'center',
                    }}>
                    {JSON.stringify(
                      cartData.length > 0
                        ? cartData?.filter(e => e?.id == item?.id).length
                        : 0,
                    )}
                  </Text>
                  <TouchableOpacity
                    onPress={() => addToCartHandler(item)}
                    style={{
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: 'white',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity> *}
              </View>
            );
          }}
        /> */}

        <FlatList
          data={categories.slice(0, 3)}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginVertical: verticalScale(14),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: horizontalScale(30),
                        height: verticalScale(30),
                        borderRadius: 80,
                      }}
                      source={{uri: item?.image?.src}}
                    />
                    <Text
                      style={{
                        fontSize: moderateScale(15),
                        fontWeight: '600',
                        marginLeft: horizontalScale(10),
                        color: 'black',
                      }}>
                      {item?.title}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(ROUTES.PRODUCTPAGE, {
                        passedCategories: item,
                      })
                    }>
                    <Text
                      style={{
                        color: '#F46F2E',
                      }}>
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  numColumns={2}
                  data={prod.filter(
                    pr =>
                      pr?.product_type.toLowerCase() ==
                      item?.title.toLowerCase(),
                  )}
                  renderItem={({item}) => {
                    console.log(item, 'hihi');

                    return (
                      <View
                        style={{
                          width: horizontalScale(155),
                          height: verticalScale(290),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: horizontalScale(12),
                          marginVertical: verticalScale(15),
                          borderRadius: 20,
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 1},
                          shadowOpacity: 0.4,
                          shadowRadius: 2,
                          backgroundColor: 'white',
                          elevation: 5,
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(ROUTES.PRODUCTDESCRIPTION, {
                              params: item,
                            })
                          }
                          style={{alignItems: 'center'}}>
                          <Image
                            resizeMode="contain"
                            style={{
                              width: horizontalScale(100),
                              height: verticalScale(75),
                            }}
                            source={{uri: item?.image?.src}}
                          />
                          <Text
                            style={{
                              fontSize: moderateScale(18),
                              marginTop: verticalScale(8),
                              color: 'black',
                            }}>
                            {item?.title.length > 10
                              ? item?.title.slice(0, 10) + '..'
                              : item?.title}
                          </Text>
                          <Text
                            style={{
                              color: '#767A78',
                            }}>
                            {item?.vendor}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginVertical: 10,
                            }}>
                            <Text
                              style={{
                                marginRight: 53,
                                color: '#767A78',
                              }}>
                              {item?.variants[0]?.inventory_quantity}
                            </Text>
                            <Text
                              style={{
                                fontWeight: '700',
                                color: 'black',
                                alignSelf: 'center',
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
                                ? horizontalScale(73)
                                : horizontalScale(73),
                            height: verticalScale(42),
                            borderRadius: 16,
                            backgroundColor: '#53B175',
                            justifyContent: 'space-evenly',

                            flexDirection: 'row',
                          }}>
                          {cartData?.filter(e => e?.id == item?.id).length >
                          0 ? (
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
                                  fontSize: moderateScale(18),
                                  fontWeight: '700',
                                }}>
                                {JSON.stringify(
                                  cartData.length > 0
                                    ? cartData?.filter(e => e?.id == item?.id)
                                        .length
                                    : 0,
                                )}
                              </Text>
                            </View>
                          ) : null}
                          <TouchableOpacity
                            style={{
                              fontSize: moderateScale(18),
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
                                cartData?.filter(e => e?.id == item?.id)
                                  .length > 0
                                  ? 10
                                  : 30,
                              left:
                                cartData?.filter(e => e?.id == item?.id)
                                  .length > 0
                                  ? 0
                                  : 30,
                            }}>
                            <Text
                              style={{
                                fontSize: moderateScale(18),
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
              </View>
            );
          }}
        />

        <View
          style={{
            height: 100,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

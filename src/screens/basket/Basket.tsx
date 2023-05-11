import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ioni from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Button from '../../components/button/Button';
import CartButton from '../../components/button/CartButton';
import WebViewModal from '../../components/webviewmodal/WebViewModal';
import {postApi} from '../../hooks/useFetch';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';

const Basket = ({navigation}) => {
  const [cartItems, setCarItems] = useState();
  const [modalUrl, setModalUrl] = useState('');

  const cartData = useSelector(state => state.reducer);
  const getQuantity = item => {
    if (cartData?.length) {
      // let temp = JSON.parse(JSON.stringify(cartData));
      let index = cartData.findIndex(obj => obj.id === item.id);
      let counter = cartData[index]?.quantity;
      return counter;
    }
    return 0;
  };

  // const totalprice = cartData => {
  //   let y = 0;

  //   for (let i = 0; i <= cartData.length; i++) {
  //     return (y = y + cartData[i]?.variants[0]?.price);
  //   }

  //   return y;
  // };

  const getCartItems = cartItems => {
    if (cartItems) {
      let arr = cartItems;
      let uniqueArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
          uniqueArr.push(arr[i]);
        }
      }

      return uniqueArr;
    } else {
      return [];
    }
  };

  const gettotalprice = item => {
    console.log('raval', item, 'vraj');
  };

  useEffect(() => {
    setCarItems(cartData);
  }, [cartData]);
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <WebViewModal
        visible={modalUrl !== ''}
        setVisible={setModalUrl}
        style={{flex: 1, backgroundColor: '#fff'}}
        title={'Payment Screen'}
        link={modalUrl}
        ref={webView => (webView = webView)}
      />

      <View
        style={{
          marginBottom: verticalScale(8),
          width: '100%',
          height: '12%',
          backgroundColor: '#F46F2E',
        }}>
        <Image
          style={{
            marginTop: verticalScale(20),
            width: horizontalScale(130),
            height: verticalScale(48),
            alignSelf: 'center',
          }}
          resizeMode="contain"
          source={require('../../../assets/RKE2.png')}
        />
        {/* <View
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
              name="location-outline"
            />
            <Text
              style={{
                fontSize: moderateScale(11),
                color: 'white',
                marginLeft: horizontalScale(5),
                alignSelf: 'center',
              }}>
              Sent too{modalUrl}
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
                onPress={() => console.log('djwncw')}
              />
            </View>
          </TouchableOpacity>
        </View>*/}
      </View>
      <View
        style={{
          height: '65%',
        }}>
        {cartItems?.length > 0 && (
          <FlatList
            data={getCartItems(cartItems)}
            renderItem={({item}) => {
              console.log('item song', item);
              return (
                <View
                  style={{
                    width: horizontalScale(350),
                    height: verticalScale(80),
                    marginVertical: verticalScale(10),
                    alignSelf: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    paddingVertical: verticalScale(5),
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 5,
                    backgroundColor: 'white',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: '20%',
                      height: '100%',
                      borderRadius: 2,
                    }}
                    source={{uri: item.image?.src}}
                  />
                  <View
                    style={{
                      width: '50%',
                      marginLeft: horizontalScale(8),

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(15),
                        fontWeight: '400',
                      }}>
                      {item.title}
                    </Text>
                    {/* <Text
                    style={{
                      marginTop: 15,
                      color: '#B6B6B6',
                    }}>
                    {cartData?.filter(e => e?.id == item?.id).length}
                  </Text> */}
                  </View>
                  <View
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: horizontalScale(12),
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(16),
                        color: '#4CAD73',
                        fontWeight: '700',
                        marginBottom: verticalScale(10),
                      }}>
                      {item?.variants[0].price * getQuantity(item)} ₹
                    </Text>
                    <CartButton item={item} num={getQuantity(item)} />
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
      <View
        style={{
          paddingTop: verticalScale(10),
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            color: '#B6B6B6',
          }}>
          Total price
        </Text>
        <Text
          style={{
            fontSize: moderateScale(16),
            color: '#4CAD73',
            fontWeight: '700',
            marginBottom: verticalScale(10),
            marginHorizontal: horizontalScale(20),
            alignSelf: 'center',
          }}>
          0 ₹
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: horizontalScale(20),
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: verticalScale(18),
          borderTopWidth: 0.4,
          borderColor: '#B6B6B6',
        }}>
        <Button
          onPress={async () => {
            console.log('body is', cartData, 'a;ksdmf', cartItems);

            let response = await postApi(
              'https://rk-bazar-grocery.myshopify.com/admin/api/2023-01/draft_orders.json',
              {
                draft_order: {
                  line_items: cartItems,
                },
              },
            );
            console.log('post api response', response);
            setModalUrl(response?.draft_order?.invoice_url);
          }}
        />
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});

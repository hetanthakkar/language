import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {TouchableOpacity} from 'react-native';
import {getApi} from '../../hooks/useFetch';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};
const Profile = () => {
  const [cartItems, setCartItems] = useState(0);
  const [categories, setCategories] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const fetchRecentOrders = async () => {
    let email = 'minal.dumbre@rkbazar.in';
    const data = await getApi(
      `https://rk-bazaar-grocery.myshopify.com/admin/api/2023-04/orders.json?since_id=5360788963638&limit=2&attribution_app_id=current`,
    );
    console.log('thisss is recentid', data?.orders[0]?.id);

    const b = [...new Set(data?.orders.flatMap(obj => obj.line_items))];

    setRecentOrders(b);
  };
  useEffect(() => {
    // fetchAll();
    fetchRecentOrders();
  }, []);

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };
  const [currentPosition, setCurrentPosition] = useState(0);
  const data = [
    {
      label: 'ordered and approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 11.49 pm ',
    },
    {
      label: 'packed',
      status: 'Your item has been packed',
      dateTime: 'Sun, 4th Nov 11.49 pm ',
    },
    {
      label: 'ordered and approved',
      status: 'Your order has been placed',
      dateTime: 'Sun, 4th Nov 3.30 pm ',
    },
    {
      label: 'ordered and approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 11.49 pm ',
    },
    {
      label: 'ordered and approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 11.49 pm ',
    },
    {
      label: 'ordered and approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 11.49 pm ',
    },
  ];
  return (
    <View
      style={{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#000" />
      <Text
        style={{
          marginVertical: 30,
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Order Summary
      </Text>
      <Text>{recentOrders}</Text>
      <View
        style={{
          height: 293,
        }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          direction="vertical"
          renderLabel={({position, stepStatus, label, crntPosition}) => {
            return (
              <View>
                <Text
                  style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
                  {data[position].label}
                </Text>
                <Text style={{fontSize: 11, color: 'gray'}}>
                  {data[position].status}
                </Text>
                <Text style={{fontSize: 11, color: 'gray'}}>
                  {data[position].dateTime}
                </Text>
              </View>
            );
          }}
        />
        <TouchableOpacity onPress={() => nextStep()}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

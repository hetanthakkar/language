import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AntDesign from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Basket,
  HomeScreen,
  Login,
  PaymentScreen,
  ProductDescription,
  ProductPage,
  ReviewScreen,
  Splash,
} from '../screens';
import LikeProducts from '../screens/likeproducts/LikeProducts';
import Profile from '../screens/profile/Profile';
import {verticalScale} from '../util/theme';
import {ROUTES} from './utils';

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

import {StyleSheet} from 'react-native';

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.SPLASH}
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.LOGIN}
        component={Login}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.HOME}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.PRODUCTPAGE}
        component={ProductPage}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.BASKET}
        component={Basket}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.REVIEW}
        component={ReviewScreen}
      />

      <Stack.Screen name={ROUTES.PAYMENTSCREEN} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.PRODUCTPAGE}
        component={ProductPage}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.PRODUCTDESCRIPTION}
        component={ProductDescription}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.BASKET}
        component={Basket}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.PAYMENTSCREEN}
        component={PaymentScreen}
      />
      <Stack.Screen name={ROUTES.REVIEW} component={ReviewScreen} />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F46F2E',
        inactiveTintColor: 'gray',
        tabStyle: {
          height: verticalScale(60),
          marginTop: verticalScale(10),
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
      initialRouteName={ROUTES.HOME}>
      <tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name={ROUTES.HOME}
        component={HomeNavigator}
      />
      <tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
        name={'likeproducts'}
        component={LikeProducts}
      />

      <tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
        name={ROUTES.BASKET}
        component={Basket}
      />
      <tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
        name={'profile'}
        component={Profile}
      />
    </tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 10,
  },
});

export default AppNavigator;

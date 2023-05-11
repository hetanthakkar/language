import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebViewModal from '../../components/webviewmodal/WebViewModal';

const PaymentScreen = props => {
  return (
    <View>
      <Text>adsfkmJ{JSON.stringify(props?.route)}</Text>
      <WebViewModal url={props?.route?.params?.url} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});

import React, {useRef} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WebView} from 'react-native-webview';
import {horizontalScale, moderateScale, verticalScale} from '../../util/theme';

const WebViewModal = props => {
  const webViewRef = useRef(null);

  return (
    <Modal
      key={props?.key}
      visible={props.visible}
      onRequestClose={() => props.setVisible('')}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: horizontalScale(280),
            backgroundColor: 'white',
            marginBottom: verticalScale(10),
            // paddingTop: 29,
          }}>
          <Pressable
            style={styles.closeIcon}
            onPress={() => props.setVisible('')}>
            <AntDesign name="arrowleft" size={25} color="#01102e" />
          </Pressable>
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
              fontWeight: '500',
              // paddingLeft: 23,
            }}>
            Confirm Payment
          </Text>
        </View>
        <WebView
          style={{flex: 1, backgroundColor: '#fff'}}
          source={{
            uri: props?.link,
          }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          mixedContentMode="compatibility"
          renderLoading={() => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
              }}></View>
          )}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn(nativeEvent);
          }}
          ref={webViewRef}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default WebViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: moderateScale(10),
  },
  closeIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

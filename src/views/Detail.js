import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import Coro from './corousel'
const { width } = Dimensions.get("window");

class Detail extends Component {
  state = {
    defaultBox: null,
    size: "small",
    color: "black",
    sizeBoxOpen: false,
    colorBoxOpen: false,
    colorIconName: "ios-arrow-down",
    iconName: "ios-arrow-down",
    sizeBorderColor: "gray",
    colorBorderColor: "gray"
  };

  componentWillMount() {
    this.sizeBox = new Animated.Value(hp("65%"));
    this.colorBox = new Animated.Value(hp("65%"));
  }

  onChooseItem = item => {
    this.setState({ size: item });
  };

  onChooseColor = item => {
    this.setState({ color: item });
  };

  openColorBox = () => {
    this.setState(
      (prevState, props) => {
        return {
          sizeBoxOpen: false,
          colorBoxOpen: !prevState.colorBoxOpen,
          colorIconName:
            prevState.colorIconName === "ios-arrow-down"
              ? "ios-arrow-up"
              : "ios-arrow-down",
          iconName: "ios-arrow-down",
          colorBorderColor:
            prevState.colorBorderColor === "gray" ? "black" : "gray",
          sizeBorderColor: "gray",
          defaultBox: "colorBox"
        };
      },
      () => {
        if (this.state.colorBoxOpen) {
          Animated.timing(this.colorBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.colorBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
        if (this.state.sizeBoxOpen) {
          Animated.timing(this.sizeBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.sizeBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
      }
    );
  };
purchase=()=>{
this.props.navigation.navigate("Payment")
}
  openSizeBox = () => {
    this.setState(
      (prevState, props) => {
        return {
          colorBoxOpen: false,
          sizeBoxOpen: !prevState.sizeBoxOpen,
          iconName:
            prevState.iconName === "ios-arrow-down"
              ? "ios-arrow-up"
              : "ios-arrow-down",
          colorIconName: "ios-arrow-down",
          sizeBorderColor:
            prevState.sizeBorderColor === "gray" ? "black" : "gray",
          colorBorderColor: "gray",
          defaultBox: "sizeBox"
        };
      },
      () => {
        if (this.state.sizeBoxOpen) {
          Animated.timing(this.sizeBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.sizeBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
        if (this.state.colorBoxOpen) {
          Animated.timing(this.colorBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.colorBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
      }
    );
  };

  render() {
    const animatedSizeBoxOpacity = this.sizeBox.interpolate({
      inputRange: [hp("30%"), hp("65%")],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    const animatedColorBoxOpacity = this.colorBox.interpolate({
      inputRange: [hp("30%"), hp("65%")],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    const {
      detailName,
      detailImageUri,
      detailPriceOne,
      detailDescription
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          {/* image */}
          <View
            style={{
              width: width,
              height: hp("65%")
            }}
          >
            <Coro/>
           </View>
          <View
            style={{
              flex: 1,
              // zIndex: 200
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 25
              }}
            >
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 15
                  }}
                >
                  $ {detailPriceOne}
                </Text>
              
                <Text
                  style={{
                    fontSize: 20,
                    marginRight: 15
                  }}
                >
                  {detailName}
                </Text>
              </View>
              </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop:'23%',
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5294d6"
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20
                }}
              >
                {detailDescription}
              </Text>
            </View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <View
                style={{
                  width: wp("45%"),
                  backgroundColor: "#5294d6",
                  borderRadius: 12,
                  padding: 5
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15
                    }}
                  >
                    <Icon name="md-cart" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 3.5
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white"
                      }}
                    >
                      Add to cart
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              
          <View
                style={{
                  width: wp("42%"),
                  backgroundColor: "#5294d6",
                  borderRadius: 12,
                  padding: 5
                }}
              >
                <TouchableOpacity
                onPress={this.purchase}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15
                    }}
                  >
                    <Icon name="ios-cash" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 3
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white"
                      }}
                    >
                      Purchase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View></View>
            
                </ScrollView>
      </View>
    );
  }
}

export default Detail;

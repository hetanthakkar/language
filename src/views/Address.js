import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Input from "../components/Input";

class Address extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            paddingBottom: 15,
            paddingHorizontal: 15,
            marginTop: 20
          }}
        >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="Your name" value="Johnny" widthHalf={true} />
              <Input value="Doe" widthHalf={true} />
            </View>
            <Input label="Address line" value="11144 Military Trail (North)" />
            <Input label="Address line 2" value="Apartment #3122" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="City" value="Bhavnagar" widthHalf={true} />
              <Input label="Zip" value="364001" widthHalf={true} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="State" value="Gujarat" widthHalf={true} />
              <Input label="Country" value="India" widthHalf={true} />
            </View>
            <View style={{flexDirection:'row',marginTop:20}}><View
              style={{
                width: wp("4.3%"),
                height: wp("5%"),
                borderWidth: 1,
                borderColor: "gray",
                marginRight: 10
              }}
            />
            <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  paddingBottom: 10
                }}
              >
                Agree to our terms & conditions
              </Text>
              
          </View>
            
             
          
              <Text
                style={{
                  fontSize: 14,
                  color: "gray"
                }}
              >
                I agree that I have read and accepted our{" "}
                <Text
                  style={{
                    fontSize: 14,
                    color: "#F08C4F"
                  }}
                 >
                  {/* <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("TermsAndConditions")
                    }
                    style={{
                      color: "#F08C4F"
                    }}
                  > */}
                  terms & conditions{" "}
                  {/* </TouchableOpacity>{" "} */}
                </Text>
                for your purchase
              </Text>
          
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Shipping")}
              style={{
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    );
  }
}

export default Address;

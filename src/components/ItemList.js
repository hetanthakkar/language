import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class ItemList extends Component {
  render() {
    console.log(this.props.image)
    const { image, name, brand, price, onPress ,description} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View
          style={{
            borderWidth:0.15,
            borderRadius:9,
            width: wp("44%"),
            marginHorizontal: 10,
            marginTop: 13,

          }}
        >
          <View
            style={{
              width: wp("44%"),
              height: wp("35%"),
              borderRadius:15
            // borderBottomWidth:0.,  
            
            }}
          >
            
            <Image
              source={{uri: image}}
              style={{
                flex: 1,
                width:'100%',
                borderTopLeftRadius:9,
                borderTopRightRadius:9,
                // borderTopRadius:19,
                alignSelf:'center',
                resizeMode:'contain'
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 5,
              alignSelf:'center'
            }}
          >
            <Text
              style={{
                marginTop:5,
                fontSize: 15,
                color: "black",
                // alignSelf:'center'
              }}
            >
              Name: {name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "black",
                // fontWeight: "bold",
                // alignSelf:'center'
              }}
            >
             Brand: {brand}
            </Text>
            
            
                         <Text
              style={{
                fontSize: 15,
                color: "black",
                marginBottom:5,
                // fontWeight: "bold",
                // alignSelf:'center'
              }}
            >
              Price: $ {price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemList;

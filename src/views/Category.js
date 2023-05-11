import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  CheckBox,
  TouchableOpacity,
  ClippingRectangle,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";
import firebase from 'firebase'
import { Item, Input, Header } from "native-base";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
var low=[]
const br = [
  "Velocity","IDEE"
];
const range=['1000-5000']
var tempo=[]
class Category extends Component {
   
  state = {
    currentIndex: 0,
    checkbox: false,
    bar: "",
    disp: [],
    id: [],
    state: "Enter State",
    about: [],
    city: [],
    cityy: "",
    pressed: false,
    products:[]
  };
  
  renderItemList_Dress = () => {
    return this.state.products.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.image,
              detailPriceOne: item.price,
              detailDescription: item.description,
              navigation:this.props.navigations
            })
          }
          key={item.id}
          image={item.image}
          name={item.name}
          brand={item.brand}
          description={item.description}
          price={item.price}
        />
      );
    });
  };

 
  onChange = async (bar) => {
    await this.setState({ bar });
    if (bar.length != 0) {
      let dis = [];
      //  if (newpublics.length != 0) publics = newpublics;
      for (let i = 0; i < publics.length; i++) {
        //  console.log(publics);
        if (
          publics[i].name.includes(this.state.bar) ||
          publics[i].name.includes(this.state.bar.toLowerCase()) ||
          publics[i].brand.includes(this.state.bar) ||
          publics[i].brand.includes(this.state.bar.toLowerCase())
        ) {
          dis.push(publics[i]);
        }
      }
      await this.setState({ dis: dis });
    } else {
      await this.setState({ dis: publics });
    }
  };

  toRender = async () => {
    await this.setState({ checkbox: !this.state.checkbox });
    await this.setState({ pressed: !this.state.pressed });
    this.props.navigation.navigate("Filter")
  };
  async componentDidMount() {

    // console.log("props",this.props)
    await firebase
    .database()
    .ref("products/")
    .on("value", async (snapshot) => {
      await this.setState({products:Object.values(snapshot.val())})
      });
      tempo= await this.state.products.sort((a, b) => {
        console.log(a.price)
        return a.price - b.price;
    })
    console.log(tempo)
    await this.setState({products:tempo}) 
   
   
    tempo= await this.state.products.sort((a, b) => {
      console.log(a.price)
      return b.price - a.price;
  })
  console.log(tempo)
  await this.setState({products:tempo}) 

tempo = this.state.products.filter((value)=>
{
for(let a=0;a<br.length;a++)
{
  console.log(value.brand)
  if(value.brand==br[a])
  return true    
}
})
await this.setState({products:tempo}) 

tempo = this.state.products.filter((value)=>
{
  for(let a=0;a<range.length;a++)
{
   low=range[a].split("-")
  // console.log(low)    
}
for(let a=0;a<low.length;a++)
  low[a]=parseInt(low[a])
  // console.log(low)
  for(let a=0;a<low.length;a++){
    console.log(value.price)
    console.log("kjsdnkjdsnf",low[0])
  if(low[0]<value.price&&value.price<low[1]){
    return true
  }
     }
})
await this.setState({products:tempo})  
}

        
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Header
          searchBar
          rounded
          autoCorrect={false}
          style={{ backgroundColor: "#01acd2" }}
        >
          <Item style={{ marginTop: screenHeight * 2 }}>
            <Icon name="ios-search" style={{ fontSize: 22, padding: 10 }} />
            <Input value={this.state.bar} onChangeText={this.onChange} />
          </Item>
          <TouchableOpacity
            onPress={this.toRender}
            style={{
              flex: 0.3,
              marginTop: screenHeight * 2.5,
              marginLeft: screenWidth * 3,
              backgroundColor: "#fc0f84",
              borderRadius: 7,
              height: screenHeight * 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Filter
            </Text>
          </TouchableOpacity>
        </Header>
        <View
          style={{
            height: hp("3%"),
            backgroundColor: "#01acd2",
            flexDirection: "row",
          }}
        >
        </View>
        
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            { this.renderItemList_Dress()}
          </ScrollView>
      </View>
    );
  }
}

export default Category;

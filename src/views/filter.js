import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  CheckBox,
  Radio,
  Header,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
export default class filter extends Component {
  state = {
    price: [],
    brand: [],
    color: [],
    size: [],
    shape: [],
    lcolor: [],
    toHigh: false,
    toLow: false,
    noSort: false,
    pressed1: true,
    pressed2: false,
    pressed3: false,
    pressed4: false,
    pressed5: false,
    pressed6: false,
    pressed7: false,
  };
  apply = () => {
    this.props.navigation.navigate("Category",{price:this.state.price,brand:this.state.brand,color:this.state.color,lcolor:this.state.lcolor,size:this.state.size,shape:this.state.shape,sort:this.state.sort})
  }
  brands = () => {
    this.setState({ pressed1: true, pressed5: false, pressed2: false, pressed3: false, pressed4: false, pressed6: false, pressed7: false });
  };
  price = () => {
    this.setState({ pressed2: true, pressed1: false, pressed5: false, pressed3: false, pressed4: false, pressed6: false, pressed7: false });
  };
  color = () => {
    this.setState({ pressed3: true, pressed1: false, pressed2: false, pressed5: false, pressed4: false, pressed6: false, pressed7: false });
  };

  lcolor = () => {
    this.setState({ pressed4: true, pressed1: false, pressed2: false, pressed3: false, pressed5: false, pressed6: false, pressed7: false });
  };

  size = () => {
    this.setState({ pressed5: true, pressed1: false, pressed2: false, pressed3: false, pressed4: false, pressed6: false, pressed7: false });
  };
  sort = () => {
    this.setState({ pressed6: true, pressed1: false, pressed2: false, pressed3: false, pressed4: false, pressed5: false, pressed7: false });
  };
  frameShape = () => {
    this.setState({ pressed7: true, pressed1: false, pressed2: false, pressed3: false, pressed4: false, pressed6: false, pressed5: false });
  };
  toHigh = () => {
    console.log("Sdlknlinoisnoiasfj")
    this.setState({ sort: "High" });
  };
  toLow = () => {
    console.log("sdljn")
    this.setState({ sort: 'Low' });
  };
  noSort = () => {
    this.setState({ sort: 'New' });
  };
  price1 = async () => {
    if (!this.state.price.includes('200-400')) {
      let price = [...this.state.price, '200-400'];
      await this.setState({ price });
      console.log(this.state.price);
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('200-400'), 1);
      this.setState({ price: temp });
    }
  };

  price2 = () => {
    if (!this.state.price.includes('400-600')) {
      let price = [...this.state.price, '400-600'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('400-600'), 1);
      this.setState({ price: temp });
    }
  };

  price3 = () => {
    if (!this.state.price.includes('600-800')) {
      let price = [...this.state.price, '600-800'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('600-800'), 1);
      this.setState({ price: temp });
    }
  };
  price4 = () => {
    if (!this.state.price.includes('800-1000')) {
      let price = [...this.state.price, '800-1000'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('800-1000'), 1);
      this.setState({ price: temp });
    }
  };
  price5 = () => {
    if (!this.state.price.includes('1000-1200')) {
      let price = [...this.state.price, '1000-1200'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('1000-1200'), 1);
      this.setState({ price: temp });
    }
  };
  price6 = () => {
    if (!this.state.price.includes('1200-1500')) {
      let price = [...this.state.price, '1200-1500'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('1200-1500'), 1);
      this.setState({ price: temp });
    }
  };

  price7 = () => {
    if (!this.state.price.includes('1500-1800')) {
      let price = [...this.state.price, '1500-1800'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('1500-1800'), 1);
      this.setState({ price: temp });
    }
  };

  price8 = () => {
    if (!this.state.price.includes('2000-2500')) {
      let price = [...this.state.price, '2000-2500'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('2000-2500'), 1);
      this.setState({ price: temp });
    }
  };

  price9 = () => {
    if (!this.state.price.includes('above 2500')) {
      let price = [...this.state.price, 'above 2500'];
      this.setState({ price });
    } else {
      let temp = this.state.price;
      temp.splice(temp.indexOf('above 2500'), 1);
      this.setState({ price: temp });
    }
  };
  brand1 = () => {
    if (!this.state.brand.includes('Fastrack')) {
      console.log('sdjbfkjb')
      let brand = [...this.state.brand, 'Fastrack'];
      this.setState({ brand });
    } else {
      console.log("lksndlkj")
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Fastrack'), 1);
      this.setState({ brand: temp });
    }
  };

  brand2 = () => {
    if (!this.state.brand.includes('Wolf Eyes')) {
      let brand = [...this.state.brand, 'Wolf Eyes'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Wolf Eyes'), 1);
      this.setState({ brand: temp });
    }
  };

  brand3 = () => {
    if (!this.state.brand.includes('Titan')) {
      let brand = [...this.state.brand, 'Titan'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Titan'), 1);
      this.setState({ brand: temp });
    }
  };

  brand4 = () => {
    if (!this.state.brand.includes('Velocity')) {
      let brand = [...this.state.brand, 'Velocity'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Velocity'), 1);
      this.setState({ brand: temp });
    }
  };

  brand5 = () => {
    if (!this.state.brand.includes('Image')) {
      let brand = [...this.state.brand, 'Image'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Image'), 1);
      this.setState({ brand: temp });
    }
  };
  brand6 = () => {
    if (!this.state.brand.includes('Idee')) {
      let brand = [...this.state.brand, 'Idee'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Idee'), 1);
      this.setState({ brand: temp });
    }
  };

  brand7 = () => {
    if (!this.state.brand.includes('Irus')) {
      let brand = [...this.state.brand, 'Irus'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Irus'), 1);
      this.setState({ brand: temp });
    }
  };

  brand8 = () => {
    if (!this.state.brand.includes('K & D')) {
      let brand = [...this.state.brand, 'K & D'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('K & D'), 1);
      this.setState({ brand: temp });
    }
  };

  brand9 = () => {
    if (!this.state.brand.includes('Kyaans')) {
      let brand = [...this.state.brand, 'Kyaans'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Kyaans'), 1);
      this.setState({ brand: temp });
    }
  };

  brand10 = () => {
    if (!this.state.brand.includes('Tag Hills')) {
      let brand = [...this.state.brand, 'Tag Hills'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Tag Hills'), 1);
      this.setState({ brand: temp });
    }
  };

  brand11 = () => {
    if (!this.state.brand.includes('Knight Horse')) {
      let brand = [...this.state.brand, 'Knight Horse'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Knight Horse'), 1);
      this.setState({ brand: temp });
    }
  };

  brand12 = () => {
    if (!this.state.brand.includes('Elvee')) {
      let brand = [...this.state.brand, 'Elvee'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Elvee'), 1);
      this.setState({ brand: temp });
    }
  };

  brand13 = () => {
    if (!this.state.brand.includes('Elevator')) {
      let brand = [...this.state.brand, 'Elevator'];
      this.setState({ brand });
    } else {
      let temp = this.state.brand;
      temp.splice(temp.indexOf('Elevator'), 1);
      this.setState({ brand: temp });
    }
  };


  color1 = () => {
    if (!this.state.color.includes('black')) {
      let color = [...this.state.color, 'black'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('black'), 1);
      this.setState({ color: temp });
    }
  };
  color2 = () => {
    if (!this.state.color.includes('Bright')) {
      let color = [...this.state.color, 'Bright'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Bright'), 1);
      this.setState({ color: temp });
    }
  };
  color3 = () => {
    if (!this.state.color.includes('Neutral')) {
      let color = [...this.state.color, 'Neutral'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Neutral'), 1);
      this.setState({ color: temp });
    }
  };
  color4 = () => {
    if (!this.state.color.includes('Blue')) {
      let color = [...this.state.color, 'Blue'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Blue'), 1);
      this.setState({ color: temp });
    }
  };
  color5 = () => {
    if (!this.state.color.includes('Grey')) {
      let color = [...this.state.color, 'Grey'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Grey'), 1);
      this.setState({ color: temp });
    }
  };
  color6 = () => {
    if (!this.state.color.includes('Brown')) {
      let color = [...this.state.color, 'Brown'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Brown'), 1);
      this.setState({ color: temp });
    }
  };
  color7 = () => {
    if (!this.state.color.includes('Green')) {
      let color = [...this.state.color, 'Green'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Green'), 1);
      this.setState({ color: temp });
    }
  };
  color8 = () => {
    if (!this.state.color.includes('Golden')) {
      let color = [...this.state.color, 'Golden'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Golden'), 1);
      this.setState({ color: temp });
    }
  };
  color9 = () => {
    if (!this.state.color.includes('Red')) {
      let color = [...this.state.color, 'Red'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Red'), 1);
      this.setState({ color: temp });
    }
  };

  color10 = () => {
    if (!this.state.color.includes('Silver')) {
      let color = [...this.state.color, 'Silver'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Silver'), 1);
      this.setState({ color: temp });
    }
  };
  color11 = () => {
    if (!this.state.color.includes('Pink')) {
      let color = [...this.state.color, 'Pink'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Pink'), 1);
      this.setState({ color: temp });
    }
  };
  color12 = () => {
    if (!this.state.color.includes('Orange')) {
      let color = [...this.state.color, 'Orange'];
      this.setState({ color });
    } else {
      let temp = this.state.color;
      temp.splice(temp.indexOf('Orange'), 1);
      this.setState({ color: temp });
    }
  };

  lcolor1 = () => {
    if (!this.state.lcolor.includes('Black')) {
      let lcolor = [...this.state.lcolor, 'Black'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Black'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor2 = () => {
    if (!this.state.lcolor.includes('Bronze')) {
      let lcolor = [...this.state.lcolor, 'Bronze'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Bronze'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor3 = () => {
    if (!this.state.lcolor.includes('Brown')) {
      let lcolor = [...this.state.lcolor, 'Brown'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Brown'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor4 = () => {
    if (!this.state.lcolor.includes('Maroon')) {
      let lcolor = [...this.state.lcolor, 'Maroon'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Maroon'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor5 = () => {
    if (!this.state.lcolor.includes('Grey')) {
      let lcolor = [...this.state.lcolor, 'Grey'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Grey'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor6 = () => {
    if (!this.state.lcolor.includes('Pink')) {
      let lcolor = [...this.state.lcolor, 'Pink'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf(6), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor7 = () => {
    if (!this.state.lcolor.includes('Blue')) {
      let lcolor = [...this.state.lcolor, 'Blue'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Blue'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor8 = () => {
    if (!this.state.lcolor.includes('Brown')) {
      let lcolor = [...this.state.lcolor, 'Brown'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Brown'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor9 = () => {
    if (!this.state.lcolor.includes('Green')) {
      let lcolor = [...this.state.lcolor, 'Green'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Green'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor10 = () => {
    if (!this.state.lcolor.includes('Grey')) {
      let lcolor = [...this.state.lcolor, 'Grey'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Grey'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor11 = () => {
    if (!this.state.lcolor.includes('Gold')) {
      let lcolor = [...this.state.lcolor, 'GOld'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Gold'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor12 = () => {
    if (!this.state.lcolor.includes('Silver')) {
      let lcolor = [...this.state.lcolor, 'Silver'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Silver'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor13 = () => {
    if (!this.state.lcolor.includes('Pink')) {
      let lcolor = [...this.state.lcolor, 'Pink'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Pink'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor14 = () => {
    if (!this.state.lcolor.includes('Purple')) {
      let lcolor = [...this.state.lcolor, 'Purple'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Purple'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor15 = () => {
    if (!this.state.lcolor.includes('Yellow')) {
      let lcolor = [...this.state.lcolor, 'Yellow'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Yellow'), 1);
      this.setState({ lcolor: temp });
    }
  };

  lcolor16 = () => {
    if (!this.state.lcolor.includes('Orange')) {
      let lcolor = [...this.state.lcolor, 'Orange'];
      this.setState({ lcolor });
    } else {
      let temp = this.state.lcolor;
      temp.splice(temp.indexOf('Orange'), 1);
      this.setState({ lcolor: temp });
    }
  };

  size1 = () => {
    if (!this.state.size.includes('Small')) {
      let size = [...this.state.size, 'Small'];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf('Small'), 1);
      this.setState({ size: temp });
    }
  };

  size2 = () => {
    if (!this.state.size.includes('Medium')) {
      let size = [...this.state.size, 'Medium'];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf('Medium'), 1);
      this.setState({ size: temp });
    }
  };

  size3 = () => {
    if (!this.state.size.includes('Large')) {
      let size = [...this.state.size, 'Large'];
      this.setState({ size });
    } else {
      let temp = this.state.size;
      temp.splice(temp.indexOf('Large'), 1);
      this.setState({ size: temp });
    }
  };
  shape1 = () => {
    if (!this.state.shape.includes('Aviator')) {
      let shape = [...this.state.shape, 'Aviator'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Aviator'), 1);
      this.setState({ shape: temp });
    }
  };
  shape2 = () => {
    if (!this.state.shape.includes('Clubmaster')) {
      let shape = [...this.state.shape, 'Clubmaster'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Clubmaster'), 1);
      this.setState({ shape: temp });
    }
  };
  shape3 = () => {
    if (!this.state.shape.includes('Pilot')) {
      let shape = [...this.state.shape, 'Pilot'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Pilot'), 1);
      this.setState({ shape: temp });
    }
  };
  shape4 = () => {
    if (!this.state.shape.includes('Maroon')) {
      let shape = [...this.state.shape, 'Maroon'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Maroon'), 1);
      this.setState({ shape: temp });
    }
  };
  shape5 = () => {
    if (!this.state.shape.includes('Rectangle')) {
      let shape = [...this.state.shape, 'Rectangle'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Rectangle'), 1);
      this.setState({ shape: temp });
    }
  };
  shape6 = () => {
    if (!this.state.shape.includes('Sports')) {
      let shape = [...this.state.shape, 'Sports'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Sports'), 1);
      this.setState({ shape: temp });
    }
  };
  shape7 = () => {
    if (!this.state.shape.includes('Wayfarer')) {
      let shape = [...this.state.shape, 'Wayfarer'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Wayfarer'), 1);
      this.setState({ shape: temp });
    }
  };
  shape8 = () => {
    if (!this.state.shape.includes('Round')) {
      let shape = [...this.state.shape, 'Round'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Round'), 1);
      this.setState({ shape: temp });
    }
  };
  shape9 = () => {
    if (!this.state.shape.includes('Oval')) {
      let shape = [...this.state.shape, 'Oval'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Oval'), 1);
      this.setState({ shape: temp });
    }
  };
  shape10 = () => {
    if (!this.state.shape.includes('Cateye')) {
      let shape = [...this.state.shape, 'Cateye'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Cateye'), 1);
      this.setState({ shape: temp });
    }
  };
  shape11 = () => {
    if (!this.state.shape.includes('Wraparound')) {
      let shape = [...this.state.shape, 'Wraparound'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Wraparound'), 1);
      this.setState({ shape: temp });
    }
  };
  shape12 = () => {
    if (!this.state.shape.includes('Bugeye')) {
      let shape = [...this.state.shape, 'Bugeye'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Bugeye'), 1);
      this.setState({ shape: temp });
    }
  };
  shape13 = () => {
    if (!this.state.shape.includes('Square')) {
      let shape = [...this.state.shape, 'Square'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Square'), 1);
      this.setState({ shape: temp });
    }
  };
  shape14 = () => {
    if (!this.state.shape.includes('Navigtor')) {
      let shape = [...this.state.shape, 'Navigator'];
      this.setState({ shape });
    } else {
      let temp = this.state.shape;
      temp.splice(temp.indexOf('Navigator'), 1);
      this.setState({ shape: temp });
    }
  };

  ischecked = (val) => {
    if (val == 1 && this.state.price.includes('200-400')) return true;
    if (val == 2 && this.state.price.includes('400-600')) return true;
    if (val == 3 && this.state.price.includes('600-800')) return true;
    if (val == 4 && this.state.price.includes('800-1000')) return true;
    if (val == 5 && this.state.price.includes('1000-1200')) return true;
    if (val == 6 && this.state.price.includes('1200-1500')) return true;
    if (val == 7 && this.state.price.includes('1500-1800')) return true;
    if (val == 8 && this.state.price.includes('2000-2500')) return true;
    if (val == 9 && this.state.price.includes('above 2500')) return true;
  };
  isBrandchecked = (val) => {
    if (val == 1 && this.state.brand.includes('Fastrack')) return true;
    if (val == 2 && this.state.brand.includes('Wolf Eyes')) return true;
    if (val == 3 && this.state.brand.includes('Titan')) return true;
    if (val == 4 && this.state.brand.includes('Velocity')) return true;
    if (val == 5 && this.state.brand.includes('Image')) return true;
    if (val == 6 && this.state.brand.includes('Idee')) return true;
    if (val == 7 && this.state.brand.includes('Irus')) return true;
    if (val == 8 && this.state.brand.includes('K & D')) return true;
    if (val == 9 && this.state.brand.includes('Kyaans')) return true;
    if (val == 10 && this.state.brand.includes('Tag Hills')) return true;
    if (val == 11 && this.state.brand.includes('Knight Horse')) return true;
    if (val == 12 && this.state.brand.includes('Elvee')) return true;
    if (val == 13 && this.state.brand.includes('Elevator')) return true;
  };
  isColorchecked = (val) => {
    if (val == 1 && this.state.color.includes('Black')) return true;
    if (val == 2 && this.state.color.includes('Bright')) return true;
    if (val == 3 && this.state.color.includes('Neutral')) return true;
    if (val == 4 && this.state.color.includes('Blue')) return true;
    if (val == 5 && this.state.color.includes('Grey')) return true;
    if (val == 6 && this.state.color.includes('Brown')) return true;
    if (val == 7 && this.state.color.includes('Green')) return true;
    if (val == 8 && this.state.color.includes('Golden')) return true;
    if (val == 9 && this.state.color.includes('Red')) return true;
    if (val == 10 && this.state.color.includes('Silver')) return true;
    if (val == 11 && this.state.color.includes('Pink')) return true;
    if (val == 12 && this.state.color.includes('Orange')) return true;

  };
  isSizechecked = (val) => {
    if (val == 1 && this.state.size.includes('Small')) return true;
    if (val == 2 && this.state.size.includes('Medium')) return true;
    if (val == 3 && this.state.size.includes('Large')) return true;
  };
  isShapechecked = (val) => {
    if (val == 1 && this.state.shape.includes('Aviator')) return true;
    if (val == 2 && this.state.shape.includes('Clubmaster')) return true;
    if (val == 3 && this.state.shape.includes('Pilot')) return true;
    if (val == 4 && this.state.shape.includes('Maroon')) return true;
    if (val == 5 && this.state.shape.includes('Rectangle')) return true;
    if (val == 6 && this.state.shape.includes('Sports')) return true;
    if (val == 7 && this.state.shape.includes('Wayfarer')) return true;
    if (val == 8 && this.state.shape.includes('Round')) return true;
    if (val == 9 && this.state.shape.includes('Oval')) return true;
    if (val == 10 && this.state.shape.includes('Cateye')) return true;
    if (val == 11 && this.state.shape.includes('Wraparound')) return true;
    if (val == 12 && this.state.shape.includes('Bugeye')) return true;
    if (val == 13 && this.state.shape.includes('Square')) return true;
    if (val == 14 && this.state.shape.includes('Navigator')) return true;
  };

  isLcolorchecked = (val) => {
    if (val == 1 && this.state.lcolor.includes('Black')) return true;
    if (val == 2 && this.state.lcolor.includes('Bonze')) return true;
    if (val == 3 && this.state.lcolor.includes('Brown')) return true;
    if (val == 4 && this.state.lcolor.includes('Maroon')) return true;
    if (val == 5 && this.state.lcolor.includes('Grey')) return true;
    if (val == 6 && this.state.lcolor.includes('Pink')) return true;
    if (val == 7 && this.state.lcolor.includes('Blue')) return true;
    if (val == 8 && this.state.lcolor.includes('Blue')) return true;
    if (val == 9 && this.state.lcolor.includes('Brown')) return true;
    if (val == 10 && this.state.lcolor.includes('Green')) return true;
    if (val == 11 && this.state.lcolor.includes('Grey')) return true;
    if (val == 12 && this.state.lcolor.includes('Gold')) return true;
    if (val == 13 && this.state.lcolor.includes('Silver')) return true;
    if (val == 14 && this.state.lcolor.includes('Pink')) return true;
    if (val == 15 && this.state.lcolor.includes('Purple')) return true;
    if (val == 16 && this.state.lcolor.includes('Yellow')) return true;
    if (val == 17 && this.state.lcolor.includes('Orange')) return true;
  };
  renderify = () => {
    if (this.state.pressed6)
      return (
        <View>
          <TouchableOpacity onPress={this.toHigh}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: screenHeight * 6,
                marginTop: screenHeight * 3,
                marginLeft: screenWidth * 2,
              }}
            >
              <Text style={{ fontSize: 15 }}>Price - Low to High</Text>
              <Radio
                selected={this.state.sort == 'High' ? true : false}
                onPress={this.toHigh}
                style={{ marginLeft: screenWidth * 18 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toLow}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * 2,
                marginTop: screenHeight * -3,
              }}
            >
              <Text style={{ fontSize: 15 }}>Price - High to Low</Text>
              <Radio
                selected={this.state.sort == "Low" ? true : false}
                onPress={this.toLow}
                style={{ marginLeft: screenWidth * 18.5 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.noSort}>
            <View
              style={{
                flexDirection: "row",
                marginVertical: screenHeight * 3,
                marginLeft: screenWidth * 2,
              }}
            >
              <Text style={{ fontSize: 15 }}>Newest First</Text>
              <Radio
                selected={this.state.sort == "New" ? true : false}
                onPress={this.noSort}
                style={{ marginLeft: screenWidth * 29 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    if (this.state.pressed2) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.price1}>
            <View
              style={{
                flexDirection: "row",
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 200 - Rs. 400</Text>
              <CheckBox
                checked={this.ischecked(1)}
                onPress={this.price1}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 400 - Rs. 600</Text>
              <CheckBox
                checked={this.ischecked(2)}
                onPress={this.price2}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 600 - Rs. 800</Text>
              <CheckBox
                checked={this.ischecked(3)}
                onPress={this.price3}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 13 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 800 - Rs. 1000</Text>
              <CheckBox
                checked={this.ischecked(4)}
                onPress={this.price4}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1000 - Rs. 1200</Text>
              <CheckBox
                checked={this.ischecked(5)}
                onPress={this.price5}
                color="#0984e3"
                style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1200 - Rs. 1500</Text>
              <CheckBox
                checked={this.ischecked(6)}
                onPress={this.price6}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 1500 - Rs. 1800</Text>
              <CheckBox
                checked={this.ischecked(7)}
                onPress={this.price7}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 2000 - Rs. 2500</Text>
              <CheckBox
                checked={this.ischecked(8)}
                onPress={this.price8}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 8 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.price9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 14 }}>Rs. 2500 and Above</Text>
              <CheckBox
                checked={this.ischecked(9)}
                onPress={this.price9}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 6 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed3) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.color1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Black</Text>
              <CheckBox
                checked={this.isColorchecked(1)}
                onPress={this.color1}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bright</Text>
              <CheckBox
                checked={this.isColorchecked(2)}
                onPress={this.color2}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Neutral </Text>
              <CheckBox
                checked={this.isColorchecked(3)}
                onPress={this.color3}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 30 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Blue</Text>
              <CheckBox
                checked={this.isColorchecked(4)}
                onPress={this.color4}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isColorchecked(5)}
                onPress={this.color5}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown</Text>
              <CheckBox
                checked={this.isColorchecked(6)}
                onPress={this.color6}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Green</Text>
              <CheckBox
                checked={this.isColorchecked(7)}
                onPress={this.color7}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.color8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Golden</Text>
              <CheckBox
                checked={this.isColorchecked(8)}
                onPress={this.color8}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Red</Text>
              <CheckBox
                checked={this.isColorchecked(9)}
                onPress={this.color9}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Silver</Text>
              <CheckBox
                checked={this.isColorchecked(10)}
                onPress={this.color10}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isColorchecked(11)}
                onPress={this.color11}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.color12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Orange</Text>
              <CheckBox
                checked={this.isColorchecked(12)}
                onPress={this.color12}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 31 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed5) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.size1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Small</Text>
              <CheckBox
                checked={this.isSizechecked(1)}
                onPress={this.size1}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.size2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Medium</Text>
              <CheckBox
                checked={this.isSizechecked(2)}
                onPress={this.size2}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 29 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.size3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Large </Text>
              <CheckBox
                checked={this.isSizechecked(3)}
                onPress={this.size3}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (this.state.pressed1) {
      return (
        <View style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.brand1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Fastrack</Text>
              <CheckBox
                checked={this.isBrandchecked(1)}
                onPress={this.brand1}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand2}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * -10,
                marginTop: screenHeight * 2,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Wolf Eyes</Text>
              <CheckBox
                checked={this.isBrandchecked(2)}
                onPress={this.brand2}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand3}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
                marginTop: screenHeight * 2,
              }}
            >
              <Text style={{ fontSize: 17 }}>Titan </Text>
              <CheckBox
                checked={this.isBrandchecked(3)}
                onPress={this.brand3}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Velocity</Text>
              <CheckBox
                checked={this.isBrandchecked(4)}
                onPress={this.brand4}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Image</Text>
              <CheckBox
                checked={this.isBrandchecked(5)}
                onPress={this.brand5}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,

                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Idee</Text>
              <CheckBox
                checked={this.isBrandchecked(6)}
                onPress={this.brand6}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Irus</Text>
              <CheckBox
                checked={this.isBrandchecked(7)}
                onPress={this.brand7}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>K & D</Text>
              <CheckBox
                checked={this.isBrandchecked(8)}
                onPress={this.brand8}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Kyaans</Text>
              <CheckBox
                checked={this.isBrandchecked(9)}
                onPress={this.brand9}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Tag Hills</Text>
              <CheckBox
                checked={this.isBrandchecked(10)}
                onPress={this.brand10}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.brand11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Knight Horse</Text>
              <CheckBox
                checked={this.isBrandchecked(11)}
                onPress={this.brand11}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.brand12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Elvee</Text>
              <CheckBox
                checked={this.isBrandchecked(12)}
                onPress={this.brand7}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.brand13}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Elevator</Text>
              <CheckBox
                checked={this.isBrandchecked(13)}
                onPress={this.brand7}
                color="#0984e3"
                style={{}}
              />
            </View>
          </TouchableOpacity>

        </View>
      );
    }
    if (this.state.pressed4) {
      return (
        <ScrollView style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.lcolor1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Black</Text>
              <CheckBox
                checked={this.isLcolorchecked(1)}
                onPress={this.lcolor1}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 36 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bronze</Text>
              <CheckBox
                checked={this.isLcolorchecked(2)}
                onPress={this.lcolor2}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown </Text>
              <CheckBox
                checked={this.isLcolorchecked(3)}
                onPress={this.lcolor3}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Maroon</Text>
              <CheckBox
                checked={this.isLcolorchecked(4)}
                onPress={this.lcolor4}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isLcolorchecked(5)}
                onPress={this.lcolor5}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isLcolorchecked(6)}
                onPress={this.lcolor6}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Blue</Text>
              <CheckBox
                checked={this.isLcolorchecked(7)}
                onPress={this.lcolor7}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Brown</Text>
              <CheckBox
                checked={this.isLcolorchecked(8)}
                onPress={this.lcolor8}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Green</Text>
              <CheckBox
                checked={this.isLcolorchecked(9)}
                onPress={this.lcolor9}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Grey</Text>
              <CheckBox
                checked={this.isLcolorchecked(10)}
                onPress={this.lcolor10}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>GOld</Text>
              <CheckBox
                checked={this.isLcolorchecked(11)}
                onPress={this.lcolor11}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.lcolor12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Silver</Text>
              <CheckBox
                checked={this.isLcolorchecked(12)}
                onPress={this.lcolor12}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 36 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor13}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pink</Text>
              <CheckBox
                checked={this.isLcolorchecked(13)}
                onPress={this.lcolor13}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 38 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor14}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Purple</Text>
              <CheckBox
                checked={this.isLcolorchecked(14)}
                onPress={this.lcolor14}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor15}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Yellow</Text>
              <CheckBox
                checked={this.isLcolorchecked(15)}
                onPress={this.lcolor15}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 34 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.lcolor16}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Orange</Text>
              <CheckBox
                checked={this.isLcolorchecked(16)}
                onPress={this.lcolor16}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
    if (this.state.pressed7) {
      return (
        <ScrollView style={{ marginLeft: screenWidth * 2 }}>
          <TouchableOpacity onPress={this.shape1}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Aviator</Text>
              <CheckBox
                checked={this.isShapechecked(1)}
                onPress={this.shape1}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape2}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Clubmaster</Text>
              <CheckBox
                checked={this.isShapechecked(2)}
                onPress={this.shape2}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 23 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape3}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Pilot </Text>
              <CheckBox
                checked={this.isShapechecked(3)}
                onPress={this.shape3}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 35 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape4}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Maroon</Text>
              <CheckBox
                checked={this.isShapechecked(4)}
                onPress={this.shape4}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 30 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape5}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Reactangle</Text>
              <CheckBox
                checked={this.isShapechecked(5)}
                onPress={this.shape5}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 23 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape6}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Sports</Text>
              <CheckBox
                checked={this.isShapechecked(6)}
                onPress={this.shape6}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape7}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Wayfarer</Text>
              <CheckBox
                checked={this.isShapechecked(7)}
                onPress={this.shape7}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 28 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape8}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Round</Text>
              <CheckBox
                checked={this.isShapechecked(8)}
                onPress={this.shape8}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 33 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape9}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Oval</Text>
              <CheckBox
                checked={this.isShapechecked(9)}
                onPress={this.shape9}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 37 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape10}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>CatEye</Text>
              <CheckBox
                checked={this.isShapechecked(10)}
                onPress={this.shape10}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape11}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Wraparound</Text>
              <CheckBox
                checked={this.isShapechecked(11)}
                onPress={this.shape11}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 22 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.shape12}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Bugeye</Text>
              <CheckBox
                checked={this.isShapechecked(12)}
                onPress={this.shape12}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape13}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Square</Text>
              <CheckBox
                checked={this.isShapechecked(13)}
                onPress={this.shape13}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 32 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.shape14}>
            <View
              style={{
                flexDirection: "row",
                marginTop: screenHeight * 2,
                marginLeft: screenWidth * -10,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Navigator</Text>
              <CheckBox
                checked={this.isShapechecked(14)}
                onPress={this.shape14}
                color="#0984e3"
              // style={{ marginLeft: screenWidth * 27 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1.2,
              backgroundColor: "white",
              borderColor: "#0984e3",
            }}
          >
            <Header style={{ backgroundColor: "#0984e3" }}>
              <Left>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Right>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: screenHeight * 2.7,
                  }}
                >
                  Filters
                </Text>
              </Right>
            </Header>

            <TouchableOpacity
              onPress={this.brands}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed1 ? '#00d2d3' : 'white',
                height: screenHeight * 7,
                borderRightColor: "#0984e3",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: this.state.pressed1 ? 'white' : 'black',
                }}
              >
                Brands
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.price}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed2 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed2 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Price
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.color}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed3 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed3 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Frame Color
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.lcolor}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed4 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed4 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Lens Color
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.size}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed5 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed5 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Frame Size
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.sort}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed6 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed6 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Sort
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.frameShape}
              style={{
                //   borderWidth: 2,
                width: screenWidth * 38,
                alignSelf: "center",
                padding: 10,
                backgroundColor: this.state.pressed7 ? '#00d2d3' : 'white',
                height: screenHeight * 7,

                borderRightColor: "black",
                borderRightWidth: 0.5,
              }}
            >
              <Text
                style={{
                  color: this.state.pressed7 ? 'white' : 'black',
                  fontSize: 15,
                }}
              >
                Frame Shape
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Header style={{ backgroundColor: "#0984e3" }}></Header>

            {this.renderify()}
          </View>
        </View>
        <TouchableOpacity
          onPress={this.frameShape}
          style={{
            width: screenWidth * 38,
            alignSelf: "center",
            padding: 10,
            borderWidth: 1.5,
            borderColor: "#00d2d3",
            borderRadius: 12,
            marginLeft: screenWidth * -45,
            marginTop: screenHeight * 17,
            backgroundColor: this.state.button7,
          }}
        >
          <Text
            style={{
              color: "#00d2d3",
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Reset All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.apply}
          style={{
            width: screenWidth * 40,
            padding: 10,
            borderColor: "#00d2d3",
            borderRadius: 12,
            marginLeft: screenWidth * 52,
            marginTop: screenHeight * -6,
            backgroundColor: "#00d2d3",
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.6;
const images = [
  require('./img1.jpg'),
  require('./img2.jpg'),
  require('./img3.jpg')
]
export default class Slider extends React.Component{
  state = {
    active: 0
  }

  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }
  }
  render(){
    return(
      <View>
        <ScrollView 
        pagingEnabled 
        horizontal 
        onScroll={this.change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
          {
          images.map((image, index) => (
            <Image 
            key={index}
            style ={styles.image} 
            source={image}/>
          ))
          }
        </ScrollView>
        <View style={styles.bolinha}>
          {
            images.map((i,k) => (
              <Text key={k} style={k == this.state.active ? styles.bolinhatexto2 : styles.bolinhatexto}>⬤</Text>
            ))
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
      width,
      height,
      resizeMode:"cover",

  },

  scroll:{
    width,
    height,
    
  },

  bolinha:{
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },

  bolinhatexto:{
    color: "#888",
    margin: 3,
  },

  bolinhatexto2:{
    color: "white",
    margin: 3,
  }

  });
import React from 'react';
import { StyleSheet,Linking, TouchableOpacity, Image, ImageBackground} from 'react-native';

const image = { uri:"https://media.giphy.com/media/lQA2tXnw7erI0jhI5S/giphy.gif" }
export default function LinkWhats(){
  return(
    
    <TouchableOpacity style={styles.buttom} onPress={() => Linking.openURL(`whatsapp://send?text=&phone=${5588994232262}`)}>
      {/* <Image style={styles.imagem} source={require('./whatsapp.png')} /> */}
      <ImageBackground source={image} resizeMode="cover" style={styles.imagem}></ImageBackground>
    </TouchableOpacity>
  
  )
}

const styles = StyleSheet.create({
  imagem:{
      width:70,
      height: 70,
      marginTop: 20,
      marginLeft: 10,
      position: "absolute",  
  }

})
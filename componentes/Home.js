import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Footer from "./Footer"
import Header from "./Header"
import Login from "./Login"
import Slider from "./Slider"


export default function Home(){
    return(
        <View>
          <Header/>
          <Slider/>
            <Text style={styles.conteudo}>Seja bem vindo!</Text>
            <Text style={styles.conteudo2}>App em construção!</Text>
          <Login/>
          <Footer/>  
        </View>
    )
}


const styles = StyleSheet.create({
conteudo: {
  marginHorizontal: 10,
  marginVertical:10,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "400",
},

conteudo2:{
  marginHorizontal: 10,
  marginTop:20,
  marginBottom:60,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "400",
}
});
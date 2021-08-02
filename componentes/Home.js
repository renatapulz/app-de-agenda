import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Footer from "./Footer"
import Header from "./Header"


export default function Home(){
    return(
        <View>
          <Header/>
            <Text style={styles.conteudo}>Seja bem vindo!</Text>
            <Text style={styles.conteudo2}>App em construção!</Text>
          <Footer/>  
        </View>
    )
}


const styles = StyleSheet.create({
conteudo: {
  marginHorizontal: 10,
  marginVertical:40,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "400",
},

conteudo2:{
  marginHorizontal: 10,
  marginTop:50,
  marginBottom:300,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "400",
}
});
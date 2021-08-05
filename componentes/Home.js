import React from "react"
import { KeyboardAvoidingView, Text, StyleSheet, ScrollView, Platform } from "react-native"
import Footer from "./Footer"
import Header from "./Header"
import LinkWhats from "./LinkWhats"
import Slider from "./Slider"


export default function Home(){
    return(
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView>
            <Header/>
            <Slider/>
            <LinkWhats/>
              <Text style={styles.conteudo}>Seja bem vindo!</Text>
              <Text style={styles.conteudo2}>App em construção!</Text>
            <Footer/>
          </ScrollView>   
      </KeyboardAvoidingView>
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
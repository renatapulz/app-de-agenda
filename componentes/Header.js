import React from "react"
import { View, Text, StyleSheet } from "react-native"


export default function Header(){
    return(
        <View style = {styles.titulo}>
            <Text style = {styles.textoTitulo}>
                 App Agenda
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  titulo:{
      backgroundColor:"#4D80E4",
      width:"100%",
      marginBottom: 10,
  },

  textoTitulo: {
      textAlign:"center",
      color: "#DFF6F0",
      fontSize: 24,
      fontWeight:"bold",
      marginVertical: 20,
  }
  });
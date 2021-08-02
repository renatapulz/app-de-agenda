import React from "react"
import { View, Text, StyleSheet } from "react-native"



export default function Footer(){
    return(
        <View style={styles.rodape}>
            <Text style={styles.textofooter}>
                 Desenvolvido por Renata Pulz 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  rodape:{
      backgroundColor:"#4D80E4",
      width:"100%",
      marginTop:40
  },

  textofooter: {
      textAlign:"center",
      color: "#DFF6F0",
      fontSize: 18,
      fontWeight:"bold",
      marginVertical: 15,
  }
  });
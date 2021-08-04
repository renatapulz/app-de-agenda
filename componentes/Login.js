import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text,  Image } from 'react-native';
import { firebaseDB } from '../firebase';


export default function Login(){
  return(
    <KeyboardAvoidingView style={styles.principal}>
      <View style={styles.espacoimg} >
      <Image style={styles.imagem} source={require('./login.png')} />
      </View>
      <View style={styles.campoprinc}>
        <TextInput 
        style={styles.inputs}
        placeholder="Email"
        onChangeText={()=> {}}
        />
         <TextInput 
        style={styles.inputs}
        placeholder="Senha"
        onChangeText={()=> {}}
        />
        <TouchableOpacity style={styles.btnentrar}>
          <Text style={styles.txtentrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btcadastrar}>
          <Text style={styles.txtcadastrar}>Não tem conta? Clique aqui!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  imagem:{
      width:80,
      height: 80,
      borderRadius: 40,
  },

  principal: {
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    width:"85%",
    padding: 10,
    borderRadius:20,
    marginBottom: 20,
  },

  espacoimg:{
    marginBottom: 30,
  },

  campoprinc:{
    width:"95%",
    alignItems: "center",
    justifyContent: "center",
  },

  inputs:{
    borderWidth: 2,
    borderRadius:8,
    borderColor: "#4D80E4",
    marginBottom: 15,
    color: "#DFF6F0",
    backgroundColor: "#4D80E4",
    padding: 5,
    width: "95%",
    fontSize: 16,
    placeholderTextColor: "white",
  },

  btnentrar:{
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:8,
    backgroundColor: "#46B3E6",
    height:32,
    marginBottom: 10,
    
  },

  txtentrar:{
    fontSize: 20,
    color: "#DFF6F0",
  },

  btcadastrar:{
    marginBottom:10,
  },

  txtcadastrar:{
    fontWeight: "500",
    padding:5
  }

  });

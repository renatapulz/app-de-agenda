import React, {useState} from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text,  Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { firebaseDB } from '../firebase';


export default function Login(){

  //criado para mudar fazer aparecer a senha, quando o usario aperta no olhinho
  const[visible, setVisible] = useState('');
  const [aparecer, setAparecer] = useState(true);

  return(
    <KeyboardAvoidingView style={styles.principal}>
        <View style={styles.espacoimg} >
        <Image style={styles.imagem} source={require('./login.png')} />
        </View>
        <View style={styles.campoprinc}>
          <TextInput 
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={()=> {}}
          />
          <View style={styles.area}>
            <TextInput 
              maxlength="15"
              style={styles.input2}
              placeholder="Digite sua senha"
              value={visible}
              onChangeText={(texto)=> setVisible(texto)}
              secureTextEntry={aparecer}
            />
            <TouchableOpacity style={styles.olho} onPress={ () => setAparecer(!aparecer)}>
              {aparecer ?
                <Ionicons name="eye" color="black" size={27}/>
                :
                <Ionicons name="eye-off" color="black" size={27}/>
              }
            </TouchableOpacity>
          </View>
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
      alignSelf:"center", 
  },

  principal: {
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    padding: 10,
    borderRadius:20,
    marginVertical: 30,
    width:"85%",
  },

  espacoimg:{
    marginBottom: 25,
  },

  campoprinc:{
    width:"90%",
    alignItems: "center",
    justifyContent: "center",
  },

  input:{
    height:30,
    borderRadius:8,
    marginBottom: 15,
    backgroundColor: "#d3d3d3",
    padding: 5,
    width: "95%",
    fontSize: 16,
  },

  input2:{
    height:30,
    borderRadius:8,
    marginBottom: 15,
    backgroundColor: "#d3d3d3",
    padding: 5,
    width: "100%",
    fontSize: 16,
    
  },

  btnentrar:{
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:8,
    backgroundColor: "#4D80E4",
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
  },

  area:{
    flexDirection: "row",
    width: "95%",
  },

  olho:{
    marginLeft: -50,
    alignItems: "center",
    height:30,
    paddingHorizontal:10,

  }

  });

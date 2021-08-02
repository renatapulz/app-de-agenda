import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { firebaseDB } from '../firebase';
import Footer from './Footer';

export default function Cadastro() {
  const contatoBase = {
    nome: "",
    sobrenome:"",
    email: "",
    telefone: {
      celular:"",
      fixo: ""
    }
  }

  const [contato, setContato] = useState(contatoBase)

  const adicionar = () => {
    firebaseDB.collection('contatos').doc().set(contato);
    setContato(contatoBase);
  }

  return (
    <View>
      <ScrollView>
      <Text style={styles.titulo}>Cadatrar Contato:</Text>

      <Text style={styles.conteudo}>Nome:</Text>
      <TextInput style={styles.textoinput}
        placeholder="Nome"
        value={contato.nome}
        onChangeText={valor => setContato({...contato, nome: valor})}
      />

      <Text style={styles.conteudo}>Sobrenome:</Text>
      <TextInput style={styles.textoinput}
        placeholder="Sobrenome"
        value={contato.sobrenome}
        onChangeText={valor => setContato({...contato, sobrenome: valor})}
      />

      <Text style={styles.conteudo}>Email:</Text>
      <TextInput style={styles.textoinput}
        placeholder="Email"
        value={contato.email}
        onChangeText={valor => setContato({...contato, email: valor})}
      />

      <Text style={styles.conteudo}>Telefone Fixo:</Text>
      <TextInput style={styles.textoinput}
        placeholder="Telefone fixo"
        value={contato.telefone.fixo}
        onChangeText={valor => setContato({...contato, telefone: {...contato.telefone, fixo: valor}})}
      />

      <Text style={styles.conteudo}>Telefone celular:</Text>
      <TextInput style={styles.textoinputultimo}
        placeholder="Telefone celular"
        value={contato.telefone.celular}
        onChangeText={valor => setContato({...contato, telefone: {...contato.telefone, celular: valor}})}
      />

      <Button title= "Adicionar"
        onPress={() => {
          adicionar()
        }}
      />
      <Footer/>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  conteudo: {
    marginHorizontal: 20,
    marginTop:10,
    fontSize: 20,
    fontWeight: "400",
    
  },
  textoinput: {
    marginHorizontal: 21,
    fontSize: 17,
    borderWidth:3,
    borderColor: "#46B3E6",
    marginBottom: 15,
    marginTop:5,
    padding: 2,
    borderRadius:8,
    
  },

  textoinputultimo: {
    marginHorizontal: 21,
    fontSize: 17,
    borderWidth:3,
    borderColor: "#46B3E6",
    borderRadius:8,
    marginBottom: 30,
    marginTop:5,
    padding: 2,
    
  },
  titulo:{
    backgroundColor:"#4D80E4",
    width:"100%",
    marginBottom: 10,
    textAlign:"center",
    color: "#DFF6F0",
    fontSize: 24,
    fontWeight:"bold",
    padding:20,
}

  });
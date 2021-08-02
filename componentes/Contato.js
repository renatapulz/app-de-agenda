import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato({contato}) {
  return (
    <View style={styles.contact}>
      <Text>Nome: { contato.nome }</Text>
      <Text>Sobrenome: { contato.sobrenome }</Text>
      <Text>Telefones: { contato.telefone.celular }, { contato.telefone.fixo }</Text>
      <Text>E-mail: { contato.email }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
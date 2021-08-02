import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { firebaseDB } from '../firebase';

import { List } from 'react-native-paper';

export default function Contatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    firebaseDB.collection('contatos').onSnapshot((query) => {
      const documentos = [];
      query.forEach((doc) => {
        documentos.push({
          id: doc.id,
          campos: doc.data()
        });
      });

      setContatos(documentos);
    });
  }, []);

  return (
    <View>
    { <List.Section>
        <List.Subheader>Selecione um contato para ver mais detalhes.</List.Subheader>
        { contatos.map((contato) => {
          return <List.Item
          key={contato.id}
          title={contato.campos.nome}
          description={contato.campos.telefone.celular}
          left={() => <List.Icon color="green" icon="phone" />}
        />
        }) }
      </List.Section> }
    </View>
  );
}

const styles = StyleSheet.create({
  contato: {
    textAlign: "center",
  },
});
import React from 'react';
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/Home'; 
import Contatos from './componentes/Contatos';
import Cadastrar from './componentes/Cadastrar';

//importando a navegacao:
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './componentes/Login';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={styles.container}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#DFF6F0',
        tabBarLabelStyle: { fontSize: 10, fontWeight: "bold", },
        tabBarStyle: { backgroundColor: '#2E279D' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Contatos"
        component={Contatos}
        options={{ tabBarLabel: 'Contatos' }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ tabBarLabel: 'Cadastrar' }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: 'Login' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  }
});
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Register from './components/Register';
import Index from './components/Index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      initialRouteName={'Login'}
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Index} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
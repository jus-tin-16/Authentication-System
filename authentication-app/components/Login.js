import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';
import Register from './Register';
import Home from './Index';
import { useState } from 'react';


export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const onPressHandler = () => {
    navigation.navigate(Register);
  }

  const onLogin = () => {
    navigation.navigate(Home);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.formContainer}>
        <TextInput 
          placeholder='Enter Username'
          style={styles.input}
        />
        <View style={styles.inputPassword}>
          <TextInput 
            placeholder='Enter Password'
            style={{flex: 1}} 
            secureTextEntry = {!showPassword}
          />
          <TouchableOpacity onPress={togglePassword}>
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.fontButton}>Login</Text>  
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 24}}>or</Text>
        <TouchableOpacity style={styles.registerButton} onPress={onPressHandler}>
          <Text style={styles.fontButton}>Register</Text>  
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {

  },
  inputPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 20,
  },
  registerButton: {
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  fontButton: {
    fontSize: 18,
    color: 'black',
  }
  
});

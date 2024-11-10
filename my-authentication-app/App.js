import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Alert, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { initDatabase, loginUser, registerUser } from './utils/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect (() => {
    initDatabase();
  })

  const checkLoginStatus = async () => {
    const status = await AsyncStorage.getItem('isLoggedIn');
    if (status == 'true'){
      setIsLoggedIn(true);
    }
  }

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const success = await loginUser(username, password);
        if (success) {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          setIsLoggedIn(true);
        } else {
          Alert.alert('Error', 'Invalid credentials');
        }
      } else {
        await registerUser(username, password);
        Alert.alert('Success', 'Transaction successfully');
      }
    } catch (error){
      Alert.alert('Error', error.message);
    }
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  }

  if (isLoggedIn){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text>Welcome, {username}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Authentication App</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Username' onChangeText={setUsername}></TextInput>
          <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry></TextInput>
        </View>  
          <TouchableOpacity style={styles.mainButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{ isLogin ? 'Login' : 'Register'}</Text>
          </TouchableOpacity>
        <StatusBar style="auto" />

        <TouchableOpacity style={styles.switchButton} onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>{isLogin ? 'New User? Create an Account' : 'Sign In'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mainButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    padding: 10,
  },
  switchText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

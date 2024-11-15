import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';


export default function Register({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const onPressHandler = () => {
    navigation.goBack();
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <StatusBar />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.imageContainer}>
            <Text style={{color: 'white'}}>Add Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20,}}>
          <TextInput 
            style={{flex: 1, borderWidth: 1, borderColor: 'blue', borderRadius: 10, padding: 10}}
            placeholder='First Name' 
          />
          <TextInput 
            style={{flex: 1, borderWidth: 1, borderColor: 'blue', borderRadius: 10, padding: 10, marginLeft: 5}}
            placeholder='Last Name' 
          />
        </View>
        <TextInput 
          style={styles.input}
          placeholder='Email' 
        />
        <TextInput 
          style={styles.input}
          placeholder='Contact Number' 
        />
        <TextInput 
          style={styles.input}
          placeholder='Address' 
        />
        <TextInput 
          style={styles.input}
          placeholder='Enter Username' 
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
        <TouchableOpacity style={styles.registerButton}>
          <Text>Register</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressHandler}>
          <Text>Already a user? Login</Text>  
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  registerButton: {
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  fontButton: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    borderRadius: 10,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 20,
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
});

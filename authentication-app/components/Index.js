import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Button } from 'react-native';
import Login from './Login';
import { useState } from 'react';


export default function Home( {navigation }) {
  const [isEditable, setIsEditable] = useState(false);

  const onPressHandler = () => {
    navigation.goBack();
  }

  const userEdit = () => {
      setIsEditable(!isEditable);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.avatarPlaceholder}>
            <Text>Avatar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Welcome, </Text>
        <Text style={styles.label}>Name:</Text>
        <View style={styles.userInfo}>
          <TextInput 
            style={styles.userDetails}
            editable={isEditable}
            placeholder={'Juan Dela Cruz'}
          />
        </View>
        <Text style={styles.label}>Contact Number:</Text>
        <View style={styles.userInfo}>
          <TextInput 
            style={styles.userDetails}
            editable={isEditable}
            placeholder={'55555555555'}
          />
        </View>
        <Text style={styles.label}>Email Address:</Text>
        <View style={styles.userInfo}>
          <TextInput 
            style={styles.userDetails}
            editable={isEditable}
            placeholder={'juan@sample.com'}
          />
        </View>
        <Text style={styles.label}>Address:</Text>
        <View style={styles.userInfo}>
          <TextInput 
            style={styles.userDetails}
            editable={isEditable}
            placeholder={'Philippines'}
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.Button, 
              {borderWidth: 1, borderColor: 'green'}]} 
            onPress={onPressHandler}
          >
            <Text>Return</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.Button,
              {borderWidth: 1, borderColor: 'red'}]} 
          >
            <Text>Remove</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.Button,
              {backgroundColor: 'lightblue'}]} 
            onPress={userEdit}
          >
            <Text>{isEditable ? 'Save' : 'Edit'}</Text>  
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  body: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  label: {
    marginBottom:  5,
    fontSize: 16,
  },
  avatarPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  userInfo: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    fontSize: 18,
    fontWeight: '400'
  },
  Button: {
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
  }
});

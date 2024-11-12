import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native';
import Register from './Register';

const Stack = createStackNavigator();

export default function Login() {
    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate(Register);
    }
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>Login</Text>
        <Pressable onPress={onPressHandler}>
            <Text>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const Stack = createStackNavigator();

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>Register</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import LogIn from './screens/LogInPage';
import Register from './screens/RegisterPage';
import MyNavigator from './navigator/MyNavigator';

export default function App() {
  return (
    <MyNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

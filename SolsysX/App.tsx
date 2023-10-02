/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import MyNavigator from './navigator/navigator';
import Start from './screens/start';
import LogIn from './screens/logIn';
import Signup from './screens/signup';



function App(): JSX.Element {

  return (
    <MyNavigator/>
  );
}


export default App;

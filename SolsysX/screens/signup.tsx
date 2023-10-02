

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationProp } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from 'react-native';

const Signup = ({ navigation }: { navigation: NavigationProp<{}> }) => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
        <Text style={styles.login}>Sign Up</Text>
        <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={setUsername}/>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword}/>
        <TextInput style={styles.input} placeholder='Confirm Password' value={confirmPass} onChangeText={setConfirmPass}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogIn')}>
            <Text style={{color: '#fff', fontSize:20, fontWeight:'bold'}}>Sign Up</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
} 

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C4A',
  },
  login: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:15
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 50,
    margin:15
  },
  forgot: {
    justifyContent: 'flex-end', 
    color: '#D4ADFC',
    fontSize: 12
  },
  forgotContainer: {
    alignItems: 'flex-end', // จัดข้อความไปทางขวา
    marginHorizontal: 50, // ขยับข้อความไปทางขวา
    marginBottom: 10
},
button: {
    alignItems: 'center',
    backgroundColor: '#5C469C',
    padding: 10,
    margin: 15,
    marginHorizontal:60,
    borderRadius:15
  },
  loginContainer: {
    flex:1,
    justifyContent:'center',
  },
  signup: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    margin:15
  },
  signupContainer: {
    flexDirection: 'row', // จัดเรียงข้อความแนวนอน
    alignItems: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
    justifyContent: 'center', // จัดให้ข้อความอยู่ตรงกลางแนวนอน
    marginTop: 20
},
signupLink: {
    color: '#D4ADFC',
    fontSize: 15,
}

});

export default Signup;

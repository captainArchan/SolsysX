
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

const LogIn = ({ navigation }: { navigation: NavigationProp<{}> }) => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
        <Text style={styles.login}>SolsysX</Text>
        <TextInput style={styles.input} placeholder='username' value={username} onChangeText={setUsername}/>
        <TextInput style={styles.input} placeholder='password' value={password} onChangeText={setPassword}/>
        <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
            <Text style={{color: '#fff', fontSize:20, fontWeight:'bold'}}>LogIn</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
                    <Text style={styles.signup}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.signupLink}>Signup</Text>
                    </TouchableOpacity>
                </View>
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

export default LogIn;

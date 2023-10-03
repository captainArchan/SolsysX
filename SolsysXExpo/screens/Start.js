import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const Start = ({navigation}) => {
    return (
        <ImageBackground source={require('../assets/start.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>SolsysX</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LogIn")}>
        <Text style={{color: '#fff', fontSize:30, fontWeight:'bold'}}>Start</Text>
      </TouchableOpacity>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      flex:1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 60,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#5C469C',
      padding: 10,
      margin: 20,
      marginHorizontal:100,
      borderRadius:15
    },
  });
  
  export default Start;
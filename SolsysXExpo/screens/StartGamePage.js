import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
const StartGame = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/GameBg.png')} resizeMode="cover" style={styles.image}>
            <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GamePage")}>
                <Text style={{color: '#fff', fontSize:40, fontWeight:'bold'}}>Let's Start</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
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
        fontSize: 50,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#234E7C',
        padding: 10,
        margin: 60,
        borderRadius:10
      },
})

export default StartGame;
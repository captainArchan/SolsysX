import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Scoreboard from './ShowScore';

const Score = ({ navigation, route }) => {
    
    const score = firebase.firestore().collection('score');
    useEffect(() => {
        const saveScore = () => {
            storeSubject()
        }
        saveScore()
    }, []);
    

    const storeSubject = () => {
        score.add({
            score: route.params.score,
            time: route.params.time
        })
    }

    return (
<<<<<<< HEAD
        <View style={[styles.container]}>
            <Text> this is your score : {route.params.score}</Text>
            <Text> this is your time : {route.params.time}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Game")}><Text>Play Again</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Start")}><Text>Back</Text></TouchableOpacity>
            <Scoreboard/>
=======
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/game.png')} resizeMode="cover" style={styles.imageBack}>
            <Text style={styles.text}>Score : {route.params.score}</Text>
            <Text style={styles.text}>Time : {route.params.time}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game")}><Text style={styles.textButton}>Play Again</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Planet")}><Text style={styles.textButton}>Back</Text></TouchableOpacity>
            </ImageBackground>
>>>>>>> c13fe49eefc87b2872ee676195099e8a83ae1c07
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBack: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        margin:5,
        fontSize:40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#667A92',
        padding: 10,
        margin: 10,
        borderRadius:10,
        marginHorizontal: 110
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
    }
})
export default Score;
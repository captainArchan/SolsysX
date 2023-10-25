import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
        <View style={[styles.container]}>
            <Text> this is your score : {route.params.score}</Text>
            <Text> this is your time : {route.params.time}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Game")}><Text>Play Again</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Start")}><Text>Back</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 200,
    }
})
export default Score;
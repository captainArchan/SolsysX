import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Score = ({ navigation, route }) => {
    return (
        <View>
            <Text> this is your score : {route.params.score}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("GamePage")}><Text>Play Again</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Start")}><Text>Back</Text></TouchableOpacity>
        </View>
    )
}

export default Score;
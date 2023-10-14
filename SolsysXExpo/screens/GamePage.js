import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';

const Game = () => {
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default Game;
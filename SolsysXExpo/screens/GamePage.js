import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Game = ({ navigation }) => {
    const [question, setQuestion] = useState(null);
    const [choices, setChoices] = useState({});
    const quizCollection = firebase.firestore().collection('game');

    useEffect(() => {
        const unsubscribe = quizCollection.onSnapshot((querySnapshot) => {
            const allData = [];
            querySnapshot.forEach((res) => {
                const { question, choice, answer } = res.data();
                allData.push({ key: res.id, question, choice, answer });
            });

            const randomQuestion = allData[Math.floor(Math.random() * allData.length)];
            setQuestion(randomQuestion.question);
            setChoices(randomQuestion.choice);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleAnswer = (selectedAnswer) => {
        const ans = answer;
        if(ans === selectedAnswer){
            alert("right answer")
        }
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#000000'}}>
            {/* <ImageBackground source={require('../assets/game.png')} resizeMode="cover" style={styles.imageBack}> */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question}</Text>
                <FlatList
                data={choices}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.optionContainer}>
                        <Text style={styles.optionStyle}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />
            </View>
            {/* </ImageBackground> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#dddddd',
    },
    optionStyle: {
        color: 'green',
        padding: 5,
        alignSelf: 'center',
        fontSize: 18
    },
    optionContainer: {
        marginTop:15
    },
    questionText: {
        fontSize:20
    },
    imageBack: {
        flex:1,
        justifyContent: 'center',
    },
    
});

export default Game;

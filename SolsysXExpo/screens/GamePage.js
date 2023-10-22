import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Game = ({ navigation }) => {
    const [question, setQuestion] = useState(null);
    const [choices, setChoices] = useState({});
    const quizCollection = firebase.firestore().collection('game');
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [numberQuiz, setNumberQuiz] = useState([]); // เอาไว้เก็บเลขข้อ แล้วเอาไปเช็คในwhileว่าซ้ำไหม ถ้าซ้ำก็สุ่มใหม่
    useEffect(() => {
        const asyncFn = async () => {
            let number = getRandomInt(20);
            let check = false
            while(!check){
                if((numberQuiz.findIndex((element) =>  element == number)) == -1){
                    setNumberQuiz(prevNumber => [...prevNumber, number]);
                    check = true;
                }else{
                    number = getRandomInt(20);
                }
            }
            const fireb = await quizCollection.get();
            const all_id = [];
            fireb.forEach(element => {
                all_id.push({
                    id: element.id
                })
            }); // เอาข้อมูล id คำถามมาใส่ใน all_id
            const quiz = await quizCollection.doc(all_id[number].id).get(); // getตามid ที่ได้
            setChoices(quiz.data().choice)
            setQuestion(quiz.data().question)
            setAnswer(quiz.data().answer)
        };
        asyncFn()
    }, []);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const randomQuestion = () => {
        console.log(quizData)
        const randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
        console.log(randomQuiz);
        setQuestion(randomQuiz.question);
        setChoices(randomQuiz.choice);
        setAnswer(randomQuiz.answer)
    }

    const handleAnswer = (selectedAnswer) => {
        const ans = answer;
        if (ans === selectedAnswer) {
            console.log(score)
            alert("right answer")
            setScore((prevScore) => prevScore + 1)
            console.log(score)
        } else (
            alert("try again")
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            {/* <ImageBackground source={require('../assets/game.png')} resizeMode="cover" style={styles.imageBack}> */}
            <View style={styles.questionContainer}>
                <Text>
                    {question}
                </Text>
                <Text>
                    {answer}
                </Text>
                <Text>
                    {choices[0]}
                </Text>
                <Text>
                    {choices[1]}
                </Text>
                <Text>
                    {choices[2]}
                </Text>
                <Text>
                    {choices[3]}
                </Text>
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
        marginTop: 15
    },
    questionText: {
        fontSize: 20
    },
    imageBack: {
        flex: 1,
        justifyContent: 'center',
    },

});

export default Game;

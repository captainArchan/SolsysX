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
    let allQuiz = [];
    const [index,setIndex] = useState(0);
    const [quiz,setQuiz] = useState([]);
    useEffect(() => {
        const asyncFn = async () => {
            let number = getRandomInt();
            console.log(number)
            setNumberQuiz(number)
            const all_id = [];
            const fireb = await quizCollection.get()
            fireb.forEach(element => {
                all_id.push({
                    id: element.id
                })
            }); // เอาข้อมูล id คำถามมาใส่ใน all_id
            for (let i = 0; i < number.length; i++){
                allQuiz.push(await quizCollection.doc(all_id[number[i]].id).get())
            }
            // const quiz = await quizCollection.doc(all_id[number].id).get(); // getตามid ที่ได้

            // const quizHandler = () => {
            //     setChoices(allQuiz[0].data().choice)
            //     setQuestion(allQuiz[0].data().question)
            //     setAnswer(allQuiz[0].data().answer)
            // }
            quizHandler(allQuiz,index)
            setQuiz(allQuiz)
            console.log(allQuiz[0])
            
        };
        asyncFn()
    }, []);
    function getRandomInt() {
        let randNum = [];
        while(true) {
            if (randNum.length == 5) {
                break;
            }
            else {
                let random = Math.floor(Math.random() * 50);
                randNum.push(random)
            }
        }
        return randNum
    }

    const quizHandler = (allQuiz,index) => {
        console.log(allQuiz)
        setChoices(allQuiz[index].data().choice)
        setQuestion(allQuiz[index].data().question)
        setAnswer(allQuiz[index].data().answer)
    }

    const handleAnswer = (selectedAnswer) => {
        const ans = answer;
        if (ans === selectedAnswer) {
            alert("right answer");
            setScore((prevScore) => prevScore + 1);
            const newIndex = index + 1;
            if (newIndex < quiz.length) {
                setIndex(newIndex);
                quizHandler(quiz, newIndex);
            } else {
                alert("คุณเล่นเกมเสร็จสิ้น");
                navigation.navigate("ScoreGain", {score: score})
                // คุณสามารถทำการนำผู้เล่นกลับไปหน้าเริ่มต้นหรือทำอะไรต่อได้ตามความต้องการ
            }
        } else {
            alert("wrong answer");
            const newIndex = index + 1;
            if (newIndex < quiz.length) {
                setIndex(newIndex);
                quizHandler(quiz, newIndex);
            } else {
                alert("คุณเล่นเกมเสร็จสิ้น");
                navigation.navigate("ScoreGain", {score: score})
                // คุณสามารถทำการนำผู้เล่นกลับไปหน้าเริ่มต้นหรือทำอะไรต่อได้ตามความต้องการ
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            {/* <ImageBackground source={require('../assets/game.png')} resizeMode="cover" style={styles.imageBack}> */}
            <View style={styles.questionContainer}>
                <Text>
                    {question}
                </Text>
                <TouchableOpacity onPress={() => handleAnswer(choices[0])}>
                    <Text> {choices[0]} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswer(choices[1])}>
                    <Text> {choices[1]} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswer(choices[2])}>
                    <Text> {choices[2]} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswer(choices[3])}>
                    <Text> {choices[3]} </Text>
                </TouchableOpacity>
                <Text> {score} </Text>
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
        marginTop: 100,
        alignItems: 'center',
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

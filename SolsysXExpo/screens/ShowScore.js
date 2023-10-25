import React, { useEffect, useState } from 'react';
import firebase from '../database/firebaseDB';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Scoreboard = () => {
    const scoreCollection = firebase.firestore().collection('score');
    const [scoreData, setScoreData] = useState([]);
  
    useEffect(() => {
      const fetchScores = async () => {
        try {
          const response = await scoreCollection.get();
          const allScores = [];
  
          response.forEach((doc) => {
            const data = doc.data();
            allScores.push({
              score: data.score,
              time: data.time,
            });
          });
  
          // เรียงลำดับคะแนนจากน้อยไปมาก
          allScores.sort((a, b) => {
            if (a.score === b.score) {
                return a.time - b.time;
              }
              return b.score - a.score;
            });
          const topFiveScores = allScores.slice(0, 5);
          setScoreData(topFiveScores);
        } catch (error) {
          console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        }
      };
  
      fetchScores();
    }, []);
  
    return (
      <View>
        {scoreData.map((item, i) => (
          <Text style={styles.text} key={i}>
           Score: {item.score}    Time: {item.time} sec
          </Text>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: '#ffff',
      fontSize: 20,
      textAlign: 'center',
      padding:5
    }
  })
  export default Scoreboard;
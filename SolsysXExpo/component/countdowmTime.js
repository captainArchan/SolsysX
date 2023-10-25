import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Timer = (props) => {
    const [time, setTime] = useState(30); // 25 minutes in seconds
    useEffect(() => {
        let interval = null;
        if (time > 0 ) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
                props.setTimer((prevTimer) => prevTimer + 1)
            }, 1000);
        }else{
            if(props.endgame !== true){
                alert("หมดเวลา");
                props.time();
                
            }
            setTime(0)
        }
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    const formatTime = (seconds) => {
        const remainingSeconds = seconds % 60;
        return `${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{formatTime(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timer: {
      fontSize: 60,
      fontWeight: 'bold',
    },
  });
  
  export default Timer;
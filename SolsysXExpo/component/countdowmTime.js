import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Timer = () => {
    const [time, setTime] = useState(25); // 25 minutes in seconds

    useEffect(() => {
        let interval = null;

        if (time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }else{
            alert("หมดเวลา")
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
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, FlatList, ScrollView, Image, Animated, Easing } from 'react-native';

const Model = () => {
    const animatedMercury = useRef(new Animated.Value(0)).current;
    const animatedVenus = useRef(new Animated.Value(0)).current;
    const animatedEarth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animate()
    })

    const animate = () => {
        Animated.loop(
            Animated.timing(animatedMercury, {
                toValue: 1,
                duration: 8000,
                useNativeDriver: true,
                easing: Easing.linear,
            })
        ).start();

        Animated.loop(
            Animated.timing(animatedVenus, {
                toValue: 1,
                duration: 8000,
                useNativeDriver: true,
                easing: Easing.linear,
            })
        ).start();

        Animated.loop(
            Animated.timing(animatedEarth, {
                toValue: 1,
                duration: 9000,
                useNativeDriver: true,
                easing: Easing.linear,
            })
        ).start();
    }

    const mercuryRotation = animatedMercury.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '360deg'],
    });

    const venusRotation = animatedVenus.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '360deg'],
    });
    const earthRotation = animatedEarth.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '360deg'],
    });

    const mercuryTransform = [
        {translateX: 10},
        {rotate: mercuryRotation},
        {translateX: -10},
        {translateY: -100},
    ]
    const venusTransform = [
        {translateX: 6},
        {rotate: venusRotation},
        {translateX: -6},
        {translateY: -70},
    ]
    const earthTransform = [
        {translateX: 20},
        {rotate: earthRotation},
        {translateX: -20},
        {translateY: -140},
    ]
    

    return(
        <ImageBackground source={require('../assets/star.png')} style={styles.container}>
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Sun.png')} style={styles.sunImage}/>
                    </TouchableOpacity>
                    <Animated.View style={[styles.item, {transform: mercuryTransform}]}>
                        <Image style={styles.mercury} source={require('../assets/Venus/Venus.png')}/>
                    </Animated.View>
                    <Animated.View style={[styles.item, {transform: venusTransform}]}>
                        <Image style={styles.venus} source={require('../assets/Mercury/Mercury.png')}/>
                    </Animated.View>
                    <Animated.View style={[styles.item, {transform: earthTransform}]}>
                        <Image style={styles.earth} source={require('../assets/Earth/Earth.png')}/>
                    </Animated.View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:"cover"
    },
    sunImage: {
        width: 100,
        height: 100,
        borderRadius:10
    },
    item: {
        position: 'absolute'
    },
    mercury: {
        width: 34,
        height: 34,
        borderRadius: 10
    },
    venus: {
        padding: 5,
        width: 20,
        height:20,
        borderRadius: 10
    },
    earth: {
        width: 34,
        height:34,
        borderRadius: 10
    }
})

export default Model;
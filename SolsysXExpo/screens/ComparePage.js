import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, } from 'react-native';
import { planetImages } from '../component/PlanetAssets';
import findRadius from '../component/comparePlanet';


const Compare = ({ navigator }) => {
    const planet1 = 58232;
    const planet2 = 3390;
    const scalePlanet = findRadius(planet1, planet2);
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Dropdown/>
            </View>
            <View style={styles.container} >
                <Image source={planetImages['Neptune']} style={{ width: scalePlanet[0], height: scalePlanet[0] }} />
                <Image source={planetImages['Uranus']} style={{ width: scalePlanet[1], height: scalePlanet[1] }} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black'
    }
})

export default Compare;
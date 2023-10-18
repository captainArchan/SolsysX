import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {planetImages} from '../component/PlanetAssets'


const PlanetList = (props) => {
    const imageSource = planetImages[props.name];
    console.log(imageSource)
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>{
                props.onSelect();
            }}
        >
            <LinearGradient style={{ borderRadius: 10 }} colors={props.colors}>
                <View style={styles.container}>
                    <Image source={imageSource} style={styles.plannetImage} />
                    <Text style={styles.plannet}>{props.name}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 200,
    },
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plannetImage: {
        width: 150,
        height: 150,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5
    },
    plannet: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#ffffff',
    },
})

export default PlanetList;
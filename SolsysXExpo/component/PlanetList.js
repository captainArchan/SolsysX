import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const planetImages = {
    Venus: require('../assets/Venus/Venus.png'),
    Mars: require('../assets/Mars/Mars.png'),
    Earth: require('../assets/Earth/Earth.png'),
    Mercury: require('../assets/Mercury/Mercury.png'),
    Jupiter: require('../assets/Jupiter/jupiter.png'),
    Saturn: require('../assets/Saturn/Saturn.png'),
    Uranus: require('../assets/Uranus/uranus.png'),
    Neptune: require('../assets/Neptune/Neptune.png')
}

const PlanetList = (props) => {
    const imageSource = planetImages[props.name];
    console.log(props.colors)
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
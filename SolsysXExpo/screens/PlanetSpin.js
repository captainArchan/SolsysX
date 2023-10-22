import React, { Suspense } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View,SafeAreaView } from 'react-native';
import PlanetAndSpin from '../render3D/render3d';
import { Canvas } from '@react-three/fiber';



const PlanetSpin = ({ route, navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Canvas style={{ flex: 1 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight color={0xc6c1c1} intensity={4} />
                <Suspense fallback={null}>
                    <PlanetAndSpin name={route.params.name} />
                </Suspense>

            </Canvas>
            <View style={styles.about}>
            {/* <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover"> */}
                <Text style={styles.title}> {route.params.name} </Text>
                <Text style={styles.content}>{route.params.about} </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("planetInfo", {
                    name: route.params.name,
                    about: route.params.about,
                    atmosphere: route.params.atmosphere,
                    component: route.params.component,
                    distance: route.params.distance,
                    moon: route.params.moon,
                    orbit: route.params.orbit,
                    physical: route.params.physical,
                    ring: route.params.ring,
                    rotate: route.params.rotate,
                    size: route.params.size,
                    colors: route.params.colors,
                })}>
                <Text style={{color: '#fff', fontSize:22, fontWeight:'bold'}}>Explore</Text>
                </TouchableOpacity>
                {/* </ImageBackground> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    about: {
        flex:1,
        backgroundColor: "#000000"
    },
    title: {
        color: "#ffffff",
        fontSize: 50,
        // marginHorizontal:50,
        fontWeight: "bold",
        textAlign: 'center'
    },
    content: {
        color: "#ffff",
        marginHorizontal:30,
        margin:10,
        fontSize:16,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4B2849',
        padding: 10,
        margin: 20,
        marginHorizontal:110,
        borderRadius:15
      },
})

export default PlanetSpin;
import React, { Suspense, useRef, useState } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { PlanetAndSpin, test } from '../render3D/render3d';
import { Canvas, useFrame } from '@react-three/fiber';
import { RenderRing } from '../render3D/renderRing';


const PlanetSpin = ({ route, navigation }) => {
    const [speedTime, setSpeedTime] = useState(true);
    return (
        <View style={{ flex: 1 }}>
            <Canvas style={{ flex: 1 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight color={0xc6c1c1} intensity={3} />
                <Suspense fallback={null}>
                    {speedTime? <PlanetAndSpin name={route.params.name} tilted={route.params.tilted} rotate={route.params.rotate3d} />
                    :<PlanetAndSpin name={route.params.name} tilted={route.params.tilted} rotate={route.params.rotate3d/60} />
                    }
                    {/* <PlanetAndSpin name={route.params.name} tilted={route.params.tilted} rotate={route.params.rotate} /> */}
                </Suspense>
                <RenderRing name={route.params.name} position={[0, 0.3, 0]} args={[2.2, 2.4, 30]} color={'#655f45'} />
                <RenderRing name={route.params.name} position={[0, 0.3, 0]} args={[2.4, 2.5, 30]} color={'#d8ae6d'} />
                <RenderRing name={route.params.name} position={[0, 0.3, 0]} args={[2.5, 2.6, 30]} color={'#ffe1ab'} />
                <RenderRing name={route.params.name} position={[0, 0.3, 0]} args={[2.6, 2.7, 30]} color={'#dbb57c'} />
                <RenderRing name={route.params.name} position={[0, 0.3, 0]} args={[2.7, 2.8, 30]} color={'#b89c72'} />
            </Canvas>
            <View style={styles.about}>
            {/* <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover"> */}
            <TouchableOpacity style={styles.buttonSpeed} onPress={()=> speedTime? setSpeedTime(false): setSpeedTime(true)}>
                <Text style={styles.speed}>{speedTime? "Speed Up": "Slow Down"}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                    <Text style={styles.title}> {route.params.name} </Text>
                    {/* <TouchableOpacity style={styles.buttonSpeed} onPress={()=> speedTime? setSpeedTime(false): setSpeedTime(true)}>
                        <Text style={styles.speed}>{speedTime? "Speed Up": "Slow Down"}</Text>
                    </TouchableOpacity> */}
            </View>
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
                    rotate3d: route.params.rotate3d
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
        flex: 1,
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
        marginHorizontal: 30,
        margin: 10,
        fontSize: 16,
        // textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4B2849',
        padding: 10,
        margin: 20,
        marginHorizontal: 30,
        borderRadius: 15
    },
    speed:{
        color: 'white',
        fontSize: 13,
    },
    buttonSpeed: {
        alignItems: 'flex-end',
        marginHorizontal: 50,
        borderRadius: 10,
    },
})

export default PlanetSpin;
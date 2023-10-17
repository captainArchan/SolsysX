import React, { Suspense } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import PlanetAndSpin from '../render3D/render3d';
import { Canvas } from '@react-three/fiber';



const PlanetSpin = ({route, navigation}) => {
    console.log(route.params.name)
    return (
        <View style={{ flex: 1 }}>
            <Canvas style={{ flex: 1}}>
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={10}/>
                <Suspense fallback={null}>
                    <PlanetAndSpin/>
                </Suspense>
            </Canvas>
            <Text style={{flex :1 }}>  
                {route.params.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PlanetSpin;
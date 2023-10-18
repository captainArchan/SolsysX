import React, { Suspense } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
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
            <Text style={{ flex: 1 }}>
                {route.params.about}
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
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import findRadius from '../component/comparePlanet';
import { SelectList } from 'react-native-dropdown-select-list'
import { planetImages, sizePlanet } from '../component/PlanetAssets';

const Compare = ({ navigator }) => {
    const [planet1, setPlanet1] = useState("");
    const [planet2, setPlanet2] = useState("");
    const data = [
        { key: '1', value: 'Mercury' },
        { key: '2', value: 'Venus' },
        { key: '3', value: 'Earth' },
        { key: '4', value: 'Mars' },
        { key: '5', value: 'Jupiter' },
        { key: '6', value: 'Saturn' },
        { key: '7', value: 'Uranus' },
        { key: '8', value: 'Neptune' },
    ]
    const imageSource1 = planet1 ? planetImages[planet1] : null;
    const imageSource2 = planet2 ? planetImages[planet2] : null;
    const size1 = planet1 ? sizePlanet[planet1] : 0;
    const size2 = planet2 ? sizePlanet[planet2] : 0;
    const scalePlanet = findRadius(size1, size2);

    return (
        <View style={styles.container}> 
            <SafeAreaView style={styles.content}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>เปรียบเทียบ</Text>
                    <Text style={styles.header}>ขนาดและการหมุน</Text>
                </View>
                <View style={styles.dropdown}>
                    <SelectList
                        setSelected={(val) => setPlanet1(val)}
                        data={data}
                        save="value"
                        search={false}
                        placeholder='Choose a planet'
                        maxHeight={200}
                        boxStyles={{ backgroundColor: 'white', width: 150, marginRight: 10 }}
                        dropdownStyles={{ backgroundColor: 'white' }}
                    />
                    <SelectList
                        setSelected={(val) => setPlanet2(val)}
                        data={data}
                        save="value"
                        search={false}
                        placeholder='Choose a planet'
                        maxHeight={200}
                        boxStyles={{ backgroundColor: 'white', width: 150 }}
                        dropdownStyles={{ backgroundColor: 'white' }}
                    />
                </View>
                <View style={styles.PlanetContainer} >
                    <Image source={imageSource1} style={{ width: scalePlanet[0], height: scalePlanet[0] }} />
                    <Image source={imageSource2} style={{ width: scalePlanet[1], height: scalePlanet[1] }} />
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        marginTop: 10,
    },
    headerContainer: {
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        color: 'white',
        paddingBottom: 10
    },
    PlanetContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dropdown: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        zIndex: 10,
        backgroundColor: 'black',
    }
})

export default Compare;

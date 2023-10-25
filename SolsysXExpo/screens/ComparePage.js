import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native';
import findRadius from '../component/comparePlanet';
import { SelectList } from 'react-native-dropdown-select-list'
import { planetImages, sizePlanet } from '../component/PlanetAssets';
import { Feather } from '@expo/vector-icons';

const Compare = ({ navigation, route }) => {
    const [planet1, setPlanet1] = useState("");
    const [planet2, setPlanet2] = useState("");
    const data = [
        { key: '1', value: 'Mercury', size: '4,880', distance: '58', rotate: '59 วัน', orbit: '88 วัน', numMoon: '0' },
        { key: '2', value: 'Venus', size: '12,104', distance: '108.21', rotate: '243 วัน', orbit: '225 วัน', numMoon: '0' },
        { key: '3', value: 'Earth', size: '12,742', distance: '150', rotate: '1 วัน', orbit: '365 วัน', numMoon: '1' },
        { key: '4', value: 'Mars', size: '6,779', distance: '228', rotate: '1 วัน 30 นาที', orbit: '686 วัน', numMoon: '2' },
        { key: '5', value: 'Jupiter', size: '139,822', distance: '778.41', rotate: '9.92 ชั่วโมง', orbit: '11.86 ปี', numMoon: '95' },
        { key: '6', value: 'Saturn', size: '116,464', distance: '1,427', rotate: '10.66 ชั่วโมง', orbit: '29.4 ปี', numMoon: '146' },
        { key: '7', value: 'Uranus', size: '50,724', distance: '2,880', rotate: '17 ชั่วโมง 14 นาที', orbit: '30,687 วัน', numMoon: '27' },
        { key: '8', value: 'Neptune', size: '49,224', distance: '4,473', rotate: '18 ชั่วโมง', orbit: '60,190 วัน', numMoon: '14' },
    ]
    const imageSource1 = planet1 ? planetImages[planet1] : null;
    const imageSource2 = planet2 ? planetImages[planet2] : null;
    const size1 = planet1 ? sizePlanet[planet1] : 0;
    const size2 = planet2 ? sizePlanet[planet2] : 0;
    const scalePlanet = findRadius(size1, size2);
    console.log(data.rotate)
    

    return (
        <View style={styles.container}>
            <SafeAreaView>
            <Feather style={styles.icon} name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
                    <Text style={styles.header}>เปรียบเทียบ</Text>
                    <Text style={styles.header2}>ขนาดของดาว</Text>
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
                <ScrollView></ScrollView>
                <View style={styles.PlanetContainer} >
                    <Image source={imageSource1} style={{ width: scalePlanet[0], height: scalePlanet[0] }} />
                    <Image source={imageSource2} style={{ width: scalePlanet[1], height: scalePlanet[1] }} />
                </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View>
                        <Text style={styles.title}>ขนาด</Text>
                        <Text style={styles.info}>{planet1 && data.find(planet => planet.value === planet1).size}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>ระยะห่างจากดวงอาทิตย์</Text>
                        <Text style={styles.info}>{planet1 && data.find(planet => planet.value === planet1).distance}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>หมุนรอบตัวเอง</Text>
                        <Text style={styles.info}>{planet1 && data.find(planet => planet.value === planet1).rotate}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>โคจรรอบดวงอาทิตย์</Text>
                        <Text style={styles.info}>{planet1 && data.find(planet => planet.value === planet1).orbit}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>บริวาร</Text>
                        <Text style={styles.info}>{planet1 && data.find(planet => planet.value === planet1).numMoon}</Text>
                    </View>
                </View>
                <View>
                <View>
                        <Text style={styles.title}>ขนาด</Text>
                        <Text style={styles.info}>{planet2 && data.find(planet => planet.value === planet2).size}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>ระยะห่างจากดวงอาทิตย์</Text>
                        <Text style={styles.info}>{planet2 && data.find(planet => planet.value === planet2).distance}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>หมุนรอบตัวเอง</Text>
                        <Text style={styles.info}>{planet2 && data.find(planet => planet.value === planet2).rotate}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>โคจรรอบดวงอาทิตย์</Text>
                        <Text style={styles.info}>{planet2 && data.find(planet => planet.value === planet2).orbit}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>บริวาร</Text>
                        <Text style={styles.info}>{planet2 && data.find(planet => planet.value === planet2).numMoon}</Text>
                    </View>
                </View>
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
    headerContainer: {
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        color: 'white',
        paddingBottom: 10,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },
    header2: {
        fontSize: 25,
        color: 'white',
        paddingBottom: 20,
        textAlign: 'center'
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
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    info: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    }
})

export default Compare;

import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import PlanetAndSpin from '../render3D/render3d';
import { Canvas } from '@react-three/fiber';
import { planetImages } from '../component/PlanetAssets';
import { LinearGradient } from "expo-linear-gradient";
import { moonImage } from '../component/PlanetAssets';
import PlanetList from '../component/PlanetList';
import firebase from '../database/firebaseDB';

const PlanetInfo = ({route, planet, navigation}) => {
    const image = planetImages[route.params.name]
    const [selectedPlanets, setSelectedPlanets] = useState([]);
    const planetCollection = firebase.firestore().collection("planet");
    const [dataPlanet, setDataPlanet] = useState([]);
    useEffect(() => {
        (planetCollection
            .get()
            .then(solarSystem => {
                const data = [];
                solarSystem.forEach(planet => {
                    data.push({
                        id: planet.id,
                        about: planet.data().about,
                        atmosphere: planet.data().atmosphere,
                        component: planet.data().component,
                        distance: planet.data().distance,
                        moon: planet.data().moon,
                        name: planet.data().name,
                        nameTH: planet.data().nameTH,
                        orbit: planet.data().orbit,
                        physical: planet.data().physical,
                        ring: planet.data().ring,
                        rotate: planet.data().rotate,
                        size: planet.data().size,
                        colors: planet.data().color,
                        tilted: planet.data().tilted,
                        rotate3d: planet.data().day
                    })
                })
                setDataPlanet(data);
            })
        );
    }, [])

    const renderPlanet = (planet) => {
        return (
            <PlanetList
                name={planet.item.name}
                colors={planet.item.colors}
                onSelect={() => {
                    {
                        navigation.replace("planetSpin", {
                            name: planet.item.name,
                            about: planet.item.about,
                            atmosphere: planet.item.atmosphere,
                            component: planet.item.component,
                            distance: planet.item.distance,
                            moon: planet.item.moon,
                            orbit: planet.item.orbit,
                            physical: planet.item.physical,
                            ring: planet.item.ring,
                            rotate: planet.item.rotate,
                            size: planet.item.size,
                            colors: planet.item.colors,
                            tilted: planet.item.tilted,
                            rotate3d: planet.item.rotate3d
                            
                        })
                    }
                }}
            />
        )
    }
    
    const currentPlanetName = route.params.name;
    const filteredPlanets = dataPlanet.filter(planet => planet.name !== currentPlanetName);
    const randomPlanets = [];
    while (randomPlanets.length < 2 && filteredPlanets.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredPlanets.length);
        randomPlanets.push(filteredPlanets.splice(randomIndex, 1)[0]);
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover">
            <View style={{alignItems: 'center'}}>
                <Image style={styles.image} source={image}/>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16}}>ขนาด</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.size}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>กิโลเมตร</Text>
                 </LinearGradient>
                <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:14}}>ระยะห่างจากดวงอาทิตย์</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.distance}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>ล้านกิโลเมตร</Text>
                </LinearGradient>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16}}>หมุนรอบตัวเอง</Text>
                    <Text style={{color:"#ffffff", fontSize:26, fontWeight: 'bold'}}>{route.params.rotate}</Text>
                </LinearGradient>
                <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16}}>หมุนรอบดวงอาทิตย์</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.orbit}</Text>
                </LinearGradient>
            </View>

            <View style={{marginHorizontal:10}}>
                <View>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold',textAlign: 'center', margin:10}}>องค์ประกอบ</Text>
                    <FlatList
                    data={route.params.component}
                    renderItem={({ item }) => (
                        <View style={styles.componentContainer}>
                            <LinearGradient  colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                            <Text style={styles.componentText}>{item}</Text>
                            </LinearGradient>
                        </View>
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.flatListContent}
                />
                </View>
            </View>

            <View style={{marginHorizontal:10}}>
            <View>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', textAlign: 'center', marginTop:15}}>บรรยากาศ</Text>
                    <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16, textAlign: 'center', padding:5}}>{route.params.atmosphere}</Text>
                    </LinearGradient>
                </View>
            </View>
            <View style={{marginHorizontal:10}}>
            <View>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', textAlign: 'center', marginTop:15}}>ลักษณะทางกายภาพ</Text>
                    <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16, textAlign: 'center', padding:5}}>{route.params.physical}</Text>
                    </LinearGradient>
                </View>
            </View>

            <View style={{marginHorizontal:10}}>
                <View>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', textAlign: 'center', marginTop:15}}>วงแหวน</Text>
                    <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                    <Text style={{color:"#ffffff", fontSize:16, textAlign: 'center', padding:5}}>{route.params.ring}</Text>
                    </LinearGradient>
                </View>
            </View>

            <View style={{marginHorizontal:10}}>
                <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10, textAlign: 'center'}}>ดวงจันทร์ที่สำคัญ</Text>
                <FlatList
                    data={route.params.moon}
                    renderItem={({ item }) => {
                        if (moonImage[item]) {
                            return (
                                <View style={styles.moonContainer}>
                                    <Image style={styles.imageMoon} source={moonImage[item]} />
                                    <Text style={styles.moonText}>
                                        {item}
                                    </Text>
                                </View>
                            );
                        } else {
                            return (
                                <View style={styles.moonContainer}>
                                    <LinearGradient style={styles.infoContainer} colors={['rgba(80, 38, 75, 1)', 'rgba(80, 38, 75, 0.3)']}>
                                    <Text style={styles.moonText}>
                                        {item}
                                    </Text>
                                    </LinearGradient>
                                </View>
                            );
                        }
                    }}
                    numColumns={2}
                    keyExtractor={(item) => item}
                />
            </View>

            <View style={{marginHorizontal:10}}>
                <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10, textAlign: 'center'}}>Recommend</Text>
                <FlatList
                    data={randomPlanets}
                    renderItem={renderPlanet}
                    numColumns={2}
                    keyExtractor={item => item.name}
                />
            </View>
            </ImageBackground>
        </ScrollView>
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
        button: {
            alignItems: 'center',
            backgroundColor: '#4B2849',
            padding: 10,
            margin: 20,
            marginHorizontal:110,
            borderRadius:15
        },
        image: {
            width: 250,
            height:250,
        },
        infoContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#50264B', 
            borderRadius: 10,
            padding: 10,
            margin: 10,
            // borderColor: "white"
          },
          imageMoon: {
            width: 150,
            height:150,
            // marginHorizontal:50
        },
        moonContainer: {
            flex: 1,
            margin: 5,
            alignItems: 'center'
        },
        moonText: {
            color: "#ffffff",
            fontSize: 16,
            padding: 10,

        },
        componentContainer: {
            flex: 1,
            marginHorizontal: 10,
            padding: 5
        },
        componentText: {
            color: '#ffffff',
            fontSize: 16,
            padding: 5,
            margin: 5, 
            // backgroundColor: '#333', 
            borderRadius: 10,
            textAlign: 'center'
        },
        border: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 5,
        },
        flatListContent: {
            justifyContent: 'center',
        }
    })
    
    export default PlanetInfo;
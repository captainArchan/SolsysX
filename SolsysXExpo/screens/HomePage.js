import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import PlanetList from '../component/PlanetList';
import { Feather } from '@expo/vector-icons';
import firebase from '../database/firebaseDB';

const HomePage = ({ navigation }) => {
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
                        colors: planet.data().color
                    })
                })
                setDataPlanet(data);
            })
        );
    }, [])

<<<<<<< Updated upstream
    const renderPlanet = (planet) => {
        return (
            <PlanetList
                name={planet.item.name}
                colors={planet.item.colors}
                onSelect={() => {
                    {
                        navigation.navigate("planetSpin", {
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
                        })
                    }
                }}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            <ImageBackground source={require('../assets/star.png')} resizeMode="cover" style={styles.imageBack} />
            <Feather style={styles.icon} name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <ScrollView>
                <View style={styles.title}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>SolsysX</Text>
                    {/* <Text style={{fontSize:18, color: '#ffffff', paddingTop:10}}>Let's explore the planet in Solar System</Text> */}
=======
                <View style={{ flexDirection: 'row' }}>
                    {/* Mercury */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(103, 95, 128, 1)', 'rgba(103, 95, 128, 0.4)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Mercury/Mercury.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Mercury</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Venus */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Venus/Venus.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Venus</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* Earth */}
                    <TouchableOpacity style={styles.gridItem} onPress={()=> navigation.navigate("PlanetSpin")}>
                        <LinearGradient colors={['rgba(14, 98, 141, 1)', 'rgba(14, 98, 141, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Earth/Earth.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Earth</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Mars */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(238, 132, 104, 1)', 'rgba(238, 132, 104, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Mars/Mars.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Mars</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* Jupiter */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(150, 90, 44, 1)', 'rgba(150, 90, 44, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Jupiter/jupiter.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Jupiter</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Saturn */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(93, 69, 45, 1)', 'rgba(93, 69, 45, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Saturn/Saturn.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Saturn</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* Uranas */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(136, 171, 180, 1)', 'rgba(136, 171, 180, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Uranus/uranus.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Uranus</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Nepturn */}
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(124, 210, 253, 1)', 'rgba(124, 210, 253, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Neptune/Neptune.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Neptune</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
>>>>>>> Stashed changes
                </View>
                <FlatList
                    data={dataPlanet}
                    renderItem={renderPlanet}
                    numColumns={2}
                    keyExtractor={item => item.name}
                />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    icon: {
        margin: 15
    },
    title: {
        margin: 15
    }
});



export default HomePage;
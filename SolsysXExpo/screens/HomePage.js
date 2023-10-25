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
                            rotate: planet.item.rotate,
                            tilted: planet.item.tilted,
                            rotate3d: planet.item.rotate3d
                        })
                    }
                }}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
 <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover">
            <Feather style={styles.icon} name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <ScrollView>
                <View style={styles.title}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>SolsysX</Text>
                    {/* <Text style={{fontSize:18, color: '#ffffff', paddingTop:10}}>Let's explore the planet in Solar System</Text> */}
                </View>
                <FlatList
                    data={dataPlanet}
                    renderItem={renderPlanet}
                    numColumns={2}
                    keyExtractor={item => item.name}
                />
            </ScrollView>
</ImageBackground>
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
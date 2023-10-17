import firebase from "./firebaseDB";
import { Component, useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList , ImageBackground, TouchableOpacity, Image, ScrollView, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';
import PlanetList from "../component/PlanetList";

export default function HomePage2() {
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
                        obrbit: planet.data().obrbit,
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

    const renderPlanet = (planet) =>{
        return(
            <PlanetList
                name = {planet.item.name}
                colors = {planet.item.colors}
                onSelect={()=>{
                    {navigation.navigate("")}
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
                </View>
                <FlatList
                 data={dataPlanet}
                 renderItem={renderPlanet}
                 numColumns={2}
                 keyExtractor={item => item.name}
                 navigation={navigation}
                />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    icon:{
        margin: 15
    },
    title:{
        margin:15
    }
});

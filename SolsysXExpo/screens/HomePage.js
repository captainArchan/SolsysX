import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
    const [search, setSearch] = useState('');
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#000000'}}>
            <ImageBackground source={require('../assets/star.png')} resizeMode="cover" style={styles.imageBack}>
            <Feather style={styles.icon} name="menu" size={24} color="white" onPress={() => navigation.openDrawer()}  />
            <ScrollView>
            <View style={styles.title}>
                <Text style={{fontSize:40, fontWeight: 'bold', color: '#ffffff', textAlign: 'center'}}>SolsysX</Text>
                {/* <Text style={{fontSize:18, color: '#ffffff', paddingTop:10}}>Let's explore the planet in Solar System</Text> */}
            </View>

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
                    <TouchableOpacity style={styles.gridItem}>
                        <LinearGradient colors={['rgba(124, 210, 253, 1)', 'rgba(124, 210, 253, 0.6)']} style={{ borderRadius: 10 }}>
                            <View style={styles.container}>
                                <Image source={require('../assets/Neptune/Neptune.png')} style={styles.plannetImage} />
                                <Text style={styles.plannet}>Neptune</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
    },
    title: {
        margin: 15
    },
    plannetImage: {
        width: 150,
        height: 150,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5
    },
    plannet: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#ffffff',

    },
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 200,
    },
    imageBack: {
        flex:1,
        justifyContent: 'center',
    },
    icon: {
        margin:15
    }

});

export default HomePage;
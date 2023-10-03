import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = () => {
    const [search, setSearch] = useState('');
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#0C0C4A'}}>
            <View style={styles.title}>
                <Text style={{fontSize:40, fontWeight: 'bold', color: '#ffffff'}}>SolsysX</Text>
                <TouchableOpacity style={styles.containerImage}>
                    <Image source={require('../assets/profile.jpg')} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput style={styles.searchInput} placeholder='Search Plannet' value={search} onChangeText={setSearch}/>
                {/* <EvilIcons name="search" size={24} color="#ffffff" style={styles.searchIcon} /> */}
            </View>
            <Text style={{color:'#ffffff', margin:15, fontSize:20, fontWeight:'bold'}}>Planet</Text>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <LinearGradient colors={['rgba(169, 101, 60, 1)', 'rgba(169, 101, 60, 0.6)']} style={{borderRadius:10}}>
                    <View style={styles.container}>
                        <Image source={require('../assets/profile.jpg')} style={styles.plannetImage}/>
                        <Text style={styles.plannet}>Mercury</Text>
                    </View>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </ScrollView>
            
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:15
    },
    searchInput: {
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        margin:15
    },
    searchIcon: {
        position: 'absolute',
        right: 16,
    },
    plannetImage: {
        width: 109,
        height:109,
    },
    plannet: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#ffffff',
        padding:10
    },
    container: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      gridItem: {
        flex: 1,
        margin: 15,
        height: 200,
      },

});

export default HomePage;
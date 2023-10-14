import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';

const Profile = () => {
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center', margin:30}}>
                <Image source={require('../assets/profile.jpg')} style={styles.image}/>
                <Text style={{color: "#ffffff", fontSize:25, fontWeight:'bold', marginTop:15}}>pangpntt</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:'bold'}}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:'bold'}}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:'bold'}}>Favorite Planet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:'bold'}}>Best Score</Text>
            </TouchableOpacity>
            
            <View style={{marginVertical:90}}>
            <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:'bold'}}>Log out</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0C0C4A',
    },
    image: {
        resizeMode: 'cover',
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        overflow: 'hidden',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#5C469C',
        padding: 10,
        margin: 15,
        marginHorizontal:50,
        borderRadius:10
    },
    logout: {
        alignItems: 'center',
        backgroundColor: '#DB2520',
        padding: 10,
        margin: 15,
        marginHorizontal:50,
        borderRadius:10
    },
})

export default Profile;
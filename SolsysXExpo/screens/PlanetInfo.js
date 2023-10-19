import React, { Suspense } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, ScrollView, Image } from 'react-native';
import PlanetAndSpin from '../render3D/render3d';
import { Canvas } from '@react-three/fiber';
import { planetImages } from '../component/PlanetAssets';
import { LinearGradient } from "expo-linear-gradient";
import { moonImage } from '../component/PlanetAssets';

const PlanetInfo = ({route, navigation}) => {
    const image = planetImages[route.params.name]
    const moon = moonImage[route.params.name]
    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover">
            <View style={{alignItems: 'center'}}>
                <Image style={styles.image} source={image}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:16}}>ขนาด</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.size}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>กิโลเมตร</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:14}}>ระยะห่างจากดวงอาทิตย์</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.distance}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>ล้านกิโลเมตร</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:16}}>หมุนรอบตัวเอง</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.rotate}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>วัน</Text>
                    </View>
                <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:16}}>หมุนรอบดวงอาทิตย์</Text>
                    <Text style={{color:"#ffffff", fontSize:30, fontWeight: 'bold'}}>{route.params.orbit}</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>วัน</Text>
                </View>
            </View>
            <View style={{marginHorizontal:10}}>
            <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10}}>องค์ประกอบ</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>{route.params.component}</Text>
                </View>
            </View>
            <View style={{marginHorizontal:10}}>
            <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10}}>บรรยากาศ</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>{route.params.atmosphere}</Text>
                </View>
            </View>
            <View style={{marginHorizontal:10}}>
            <View style={styles.infoContainer}>
                    <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10}}>ลักษณะทางกายภาพ</Text>
                    <Text style={{color:"#ffffff", fontSize:16}}>{route.params.physical}</Text>
                </View>
            </View>
            <View style={{marginHorizontal:10}}>
                <Text style={{color:"#ffffff", fontSize:20, fontWeight: 'bold', padding:10}}>ดวงจันทร์ที่สำคัญ</Text>
                <Image style={styles.imageMoon} source={moon}/>
                <Text style={{color:"#ffffff", fontSize:16, marginHorizontal:50, marginBottom:50}}>{route.params.moon}</Text>
                
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
            // borderWidth: 1,
            // borderRadius: 10,
            padding: 10,
            margin: 5,
            // borderColor: "white"
          },
          imageMoon: {
            width: 150,
            height:150,
            marginHorizontal:50
        }
    })
    
    export default PlanetInfo;
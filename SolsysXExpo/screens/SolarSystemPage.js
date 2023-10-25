import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import firebase from '../database/firebaseDB';

const SolarSystem = ({navigation, route}) => {

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            <ImageBackground source={require('../assets/star.png')} style={{ flex: 1 }} resizeMode="cover">
            <Feather style={styles.icon} name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
            <ScrollView>
                <Text style={{color: '#ffffff', fontSize:40, fontWeight: 'bold', textAlign: 'center'}}>Solar System</Text>
                {/* <Text style={{color: '#ffffff', fontSize:20, textAlign: 'center'}}>ระบบสุริยะจักรวาล</Text> */}
                <View style={{alignItems: 'center', marginTop: 40}}>
                    <Image style={styles.imageSolsys} source={require('../assets/SolSys.png')} />
                    <Text style={styles.text}>ระบบสุริยะ (Solar System) ประกอบด้วยดวงอาทิตย์ และวัตถุอื่นๆ ที่โคจรรอบดวงอาทิตย์เนื่องจากแรงโน้มถ่วง
                        ได้แก่ ดาวเคราะห์ 8 ดวงกับดวงจันทร์บริวาร และ ดาวเคราะห์แคระ 5 ดวงกับดวงจันทร์บริวาร และมีวัตถุขนาดเล็กอื่น ๆ อีกนับล้านชิ้น ซึ่งรวมถึงดาวเคราะห์น้อย, วัตถุในแถบไคเปอร์ดาวหาง, สะเก็ดดาวและฝุ่นระหว่างดาวเคราะห์</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Image style={styles.imageSun} source={require('../assets/Sun.png')} />
                    <Text style={styles.textSun}>ดวงอาทิตย์เป็นดาวฤกษ์ที่อยู่ศูนย์กลางของระบบสุริยะ เป็นพลาสมาร้อนทรงกลมโดยมีการเคลื่อนที่พาซึ่งผลิตสนามแม่เหล็กผ่าน กระบวนการไดนาโม ปัจจุบันเป็นแหล่งพลังงาน สำคัญที่สุดสำหรับสิ่งมีชีวิตบนโลก มีเส้นผ่านศูนย์กลางประมาณ 1.39 ล้านกิโลเมตร ใหญ่กว่าโลก 109 เท่า และมีมวลประมาณ 330,000 เท่า คิดเป็นประมาณร้อยละ 99.86 ของมวลทั้งหมด ของระบบสุริยะ</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 30}}>
                    <Image style={styles.imagePlanet} source={require('../assets/planet.png')} />
                    <Text style={styles.textPlanet}>ดาวเคราะห์ทั้ง 8 ดวงในระบบสุริยะ เรียงลำดับจากใกล้ดวงอาทิตย์ที่สุดออกไป มีดังนี้คือ ดาวพุธ ดาวศุกร์ โลก ดาวอังคาร ดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop:30}}>
                    <View>
                        <Image style={styles.image} source={require('../assets/Mercury/Mercury.png')}/>
                        <Text style={styles.textDow}>Mercury</Text>
                        <Text style={styles.textDowthai}>ดาวพุธ</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../assets/Venus/Venus.png')}/>
                        <Text style={styles.textDow}>Venus</Text>
                        <Text style={styles.textDowthai}>ดาวศุกร์</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../assets/Earth/Earth.png')}/>
                        <Text style={styles.textDow}>Earth</Text>
                        <Text style={styles.textDowthai}>โลก</Text>
                    </View>
                    
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <Image style={styles.image} source={require('../assets/Mars/Mars.png')}/>
                        <Text style={styles.textDow}>Mars</Text>
                        <Text style={styles.textDowthai}>ดาวอังคาร</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../assets/Jupiter/jupiter.png')}/>
                        <Text style={styles.textDow}>Jupiter</Text>
                        <Text style={styles.textDowthai}>ดาวพฤหัสบดี</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../assets/Saturn/Saturn.png')}/>
                        <Text style={styles.textDow}>Saturn</Text>
                        <Text style={styles.textDowthai}>ดาวเสาร์</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <Image style={styles.image} source={require('../assets/Uranus/uranus.png')}/>
                        <Text style={styles.textDow}>Uranus</Text>
                        <Text style={styles.textDowthai}>ดาวยูเรนัส</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require('../assets/Neptune/Neptune.png')}/>
                        <Text style={styles.textDow}>Neptune</Text>
                        <Text style={styles.textDowthai}>ดาวเนปจูน</Text>
                    </View>
                </View>
                </View>
                
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageSolsys: {
        width: 380,
        height:280,
    },
    text: {
        color: '#ffffff',
        marginHorizontal: 20,
        margin: 10,
        textAlign: 'center',
        fontSize: 16
    },
    imageSun: {
        width: 300,
        height:300,
    },
    textSun: {
        color: '#ffffff',
        marginHorizontal: 20,
        // margin: 10,
        textAlign: 'center',
        fontSize: 16
    },
    imagePlanet: {
        width: 390,
        height:270,
    },
    textPlanet: {
        color: '#ffffff',
        marginHorizontal: 20,
        margin: 10,
        textAlign: 'center',
        fontSize: 16
    },
    image: {
        width: 100,
        height:100,
        margin:10
    },
    textDow: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textDowthai: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:20
    },
    icon: {
        margin: 15
    }
})

export default SolarSystem;
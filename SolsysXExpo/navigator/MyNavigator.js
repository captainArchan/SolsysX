import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Start from "../screens/Start";
import HomePage from "../screens/HomePage";
import Game from "../screens/GamePage";
import Compare from "../screens/ComparePage";
import PlanetSpin from "../screens/PlanetSpin";
import PlanetInfo from "../screens/PlanetInfo";
import Model from "../screens/ModelPage";
import SolarSystem from "../screens/SolarSystemPage";
import Score from "../screens/ScoreGain";
import StartGame from "../screens/StartGamePage";
import ShowScore from "../screens/ShowScore";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "black", drawerInactiveTintColor: "gray", }}>
        <Drawer.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
        <Drawer.Screen name="Solar System" component={SolarSystem} options={{headerShown:false}}/>
        <Drawer.Screen name="Game" component={StartGame} options={{headerShown:false}}/>
        <Drawer.Screen name="Compare" component={Compare} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={MyDrawer} options={{headerShown:false}}/>
                <Stack.Screen name="planetSpin" component={PlanetSpin} options={{headerTitle: '', headerStyle: {backgroundColor: '#000000'}, headerTintColor: "white"}}/>
                <Stack.Screen name="planetInfo" component={PlanetInfo} options={{headerTitle: '', headerStyle: {backgroundColor: '#000000'}, headerTintColor: "white"}}/>
                <Stack.Screen name="ScoreGain" component={Score} options={{headerShown: false}} />
                <Stack.Screen name="GamePage" component={Game} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
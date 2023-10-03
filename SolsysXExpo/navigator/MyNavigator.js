import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Start from "../screens/Start";
import LogIn from "../screens/LogInPage";
import Register from "../screens/RegisterPage";
import HomePage from "../screens/HomePage";
import PlanetSpin from "../screens/PlanetSpin";
import Favorite from "../screens/FavoritePage";
import Game from "../screens/GamePage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarStyle: {backgroundColor:'#5C469C'}}}>
            <Tab.Screen name="Home" component={HomePage} 
            options={{
                tabBarIcon: ({ color, size }) => {
                  return <Entypo name="home" size={24} color="#ffffff" />;
                  },headerShown:false, tabBarLabelStyle: {fontSize:16, color: '#ffffff', fontWeight: 'bold'}
            }}/>
            <Tab.Screen name="Planet" component={PlanetSpin} 
            options={{
                tabBarIcon: ({ color, size }) => {
                  return <Ionicons name="planet" size={24} color="#ffffff" />;
                  },headerShown:false, tabBarLabelStyle: {fontSize:16, color: '#ffffff', fontWeight: 'bold'}
            }}/>
            <Tab.Screen name="Favorite" component={Favorite} 
            options={{
                tabBarIcon: ({ color, size }) => {
                  return <MaterialIcons name="favorite" size={24} color="#ffffff" />;
                  },headerShown:false, tabBarLabelStyle: {fontSize:16, color: '#ffffff', fontWeight: 'bold'}
            }}/>
            <Tab.Screen name="Game" component={Game} 
            options={{
                tabBarIcon: ({ color, size }) => {
                  return <Entypo name="game-controller" size={24} color="#ffffff" />;
                  },headerShown:false, tabBarLabelStyle: {fontSize:16, color: '#ffffff', fontWeight: 'bold'}
            }}/>
        </Tab.Navigator>
    )
}

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="LogIn" component={LogIn} options={{headerTransparent: true, headerTitle: ''}}/>
                <Stack.Screen name="Register" component={Register} options={{headerTransparent: true, headerTitle: ''}}/>
                <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
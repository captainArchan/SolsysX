import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Start from "../screens/Start";
import HomePage from "../screens/HomePage";
import Game from "../screens/GamePage";
import Compare from "../screens/ComparePage";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "black", drawerInactiveTintColor: "gray", }}>
        <Drawer.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
        <Drawer.Screen name="Game" component={Game} options={{headerShown:false}}/>
        <Drawer.Screen name="Compare" component={Compare}/>
        </Drawer.Navigator>
    )
}

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={MyDrawer} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import Start from "../screens/Start";
import HomePage from "../screens/HomePage";


const Stack = createNativeStackNavigator();



export default function MyNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
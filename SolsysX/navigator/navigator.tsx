import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../screens/start";
import LogIn from "../screens/logIn";
import Signup from "../screens/signup";

const Stack = createNativeStackNavigator();


export default function MyNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="LogIn" component={LogIn}
                options={{headerStyle: { backgroundColor: "#0C0C4A", },headerTintColor: "white",}} />
                <Stack.Screen name="Signup" component={Signup} 
                options={{headerStyle: { backgroundColor: "#0C0C4A", },headerTintColor: "white",}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

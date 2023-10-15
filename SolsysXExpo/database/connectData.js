import firebase from "./firebaseDB";
import { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function HomePage2() {
    const planetCollection = firebase.firestore().collection("planet");
    const [dataPlanet, setDataPlanet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await planetCollection.get();
                const all_data = [];
                querySnapshot.forEach((res) => {
                      console.log("res: ", res);
                    const { code, name, credit } = res.data();
                    all_data.push({
                        key: res.id,
                        code,
                        name,
                        credit,
                    });
                });
                console.log(all_data); // Log the data from Firestore
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <View>
            <Text>123</Text>
        </View>
    );
}

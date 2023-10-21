import { Button, StyleSheet, Text, View } from "react-native";

export default function StartGame({navigation}){
    return(
        <View style={styles.container}>
            <Button title="Start" onPress={()=> navigation.navigate("Game")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 100
    }
})
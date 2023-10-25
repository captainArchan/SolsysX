import { Button, StyleSheet, Text, View } from "react-native";

const StartGame = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Button title="Start" onPress={()=> navigation.navigate("GamePage")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 100
    }
})

export default StartGame;
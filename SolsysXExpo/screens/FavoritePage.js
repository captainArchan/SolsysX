import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity,View } from 'react-native';

const Favorite = () => {
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Favorite;
import { View, StyleSheet, Button, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'react-native-screens';

export function Home() {
    const navigation = useNavigation();
  
    
  
    return (
    <View style={styles.container}>
        <View>
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image> 
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        </View>
        <View>
        <Image source={require("../../assets/gato.png")}style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}></Image> 
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        <Image source={require("../../assets/gato.png")}
        style={{
        margin: 20,
        resizeMode: "contain",
        width: 150,
        height:150
        }}
        ></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        // margin: 20,
        // resizeMode: "contain",
        // width: 100
    }
})
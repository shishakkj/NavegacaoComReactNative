import { View, StyleSheet, Button, Image, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Sobre() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Cadastro')
    }
  
    return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Image source={require("../../assets/gato.png")}></Image> 
        <Text>certamente um dos aplicativos</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores illo facilis obcaecati exercitationem adipisci fugit nobis, veritatis enim officia est nam commodi. Odio eius ipsa dolore enim nesciunt? Eaque.</Text>
        <TouchableOpacity style={{
            backgroundColor: "green",
            margin: 20,
            justifyContent: "center",
            width: 100,
            flexDirection: "row"
            }}
         onPress={openScreen}>
        <Text style={{color:"#fff"}}>Tela Cadastro</Text>
        

        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
})
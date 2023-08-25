import { View, StyleSheet, Button, Image, Text, TextInput, TouchableOpacity  } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Cadastro() {
    const navigation = useNavigation();
    
function openScreen(){
    navigation.navigate('Tabs')
}

  
    return (
    <View style={styles.container}>
         <Image source={require("../../assets/gato.png")}style={{marginBottom: 5}}></Image> 
         <TextInput placeholder='Nome' style={{marginBottom: 5}}></TextInput>
         
         <TextInput placeholder='Email' style={{marginBottom: 5}}></TextInput>
         <TextInput placeholder='Data de nascimento' style={{marginBottom: 5}}></TextInput>
         <TextInput placeholder='CPF' style={{marginBottom: 10}}></TextInput>
         <TouchableOpacity style={{
            backgroundColor: "green",
            marginBottom: 10,
            justifyContent: "center",
            width: 60,
            flexDirection: "row",
   
            
         }}>
        <Text style={{color:"#fff"}}>Salvar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
            backgroundColor: "green",
            marginBottom: 10,
            justifyContent: "center",
            width: 50,
            flexDirection: "row"
            }}
         onPress={openScreen}>
        <Text style={{color:"#fff"}}>Voltar</Text>
        

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center'
    }
})
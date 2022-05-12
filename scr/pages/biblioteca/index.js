import React from "react";
import { Button, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Merriweather': require('../../../assets/fonts/Merriweather/Merriweather.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    

    return (
        <ScrollView>
            <View style={styles.container}>

            <Text style={styles.txtH1}>Biblioteca</Text>
            <View>
                <Image style={styles.logo} source={require('../../../assets/linha.png')} />
            </View>
            <Text style={styles.txtH2} onPress={() => { navigation.navigate('O que é')}}>1 O que é tarot?</Text>

            <Text style={styles.txtH2} onPress={() => { navigation.navigate('Como funciona?')}}>2 Como funciona uma leitura de tarot?</Text>

            <Text style={styles.txtH2} onPress={() => { navigation.navigate('Começo')}}>3 Começando o tarot como um iniciante?</Text>

            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 1')}}>3.1 Etapa 1. Compre um baralho de tarot</Text>

            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>3.2 Etapa 2. Aprenda a estrutura do baralho de tarot</Text>

            <Text style={styles.txtH4} onPress={() => { navigation.navigate('Arcanos Maiores')}}>3.2.1 Arcanos Maiores</Text>

            <Text style={styles.txtH4} onPress={() => { navigation.navigate('Biblioteca')}}>3.2.2 Arcanos Menores</Text>

            <Text style={styles.txtH5} onPress={() => { navigation.navigate('Biblioteca')}}>3.2.2.1 O Naipe de Copas</Text>

            <Text style={styles.txtH5} onPress={() => { navigation.navigate('Biblioteca')}}>3.2.2.2 O Naipe de Ouros</Text>

            <Text style={styles.txtH5} onPress={() => { navigation.navigate('Biblioteca')}}>3.2.2.3 O Naipe de Espadas</Text>

            <Text style={styles.txtH5} onPress={() => { navigation.navigate('Biblioteca')}}>3.2.2.4 O Naipe de Paus</Text>

            <Text style={styles.txtH4} onPress={() => { navigation.navigate('Etapa 3')}}>3.3 Etapa 3 – Aprenda a fazer perguntas ao tarot</Text>

            <Text style={styles.txtH4} onPress={() => { navigation.navigate('Etapa 4')}}>3.4 Etapa 4 – Aprenda uma tiragem de tarot básica</Text>

            <Text style={styles.txtH2} onPress={() => { navigation.navigate('Jornada')}}>4 Pratique, pratique, pratique a ler cartas e Comece sua jornada de tarot!</Text>
            
            <View>
                <Image style={styles.logo} source={require('../../../assets/linha.png')} />
            </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingBottom: 10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#2B1F39'
    },
    logo: {
        margin:10,
        width: 335,
        height: 50
    },
    
    txtH1:{
        textAlign:'center',
        fontFamily:'Merriweather',
        color: '#fff',
        width:'100%',
        marginTop:40,
        fontSize: 28
    },

    txtH2:{
        fontFamily:'Merriweather',
        color: '#fff',
        paddingLeft:8,
        margin:10,
        textDecorationLine: 'underline',
        fontSize: 28
    },
    
    txtH3:{
        fontFamily:'Merriweather',
        color: '#fff',
        paddingLeft:18,
        margin:10,
        textDecorationLine: 'underline',
        fontSize: 22
    },
    txtH4:{
        fontFamily:'Merriweather',
        color: '#fff',
        paddingLeft:30,
        margin:10,
        textDecorationLine: 'underline',
        fontSize: 20
    },
    txtH5:{
        fontFamily:'Merriweather',
        color: '#fff',
        paddingLeft:50,
        margin:10,
        textDecorationLine: 'underline',
        fontSize: 18
    }
    
});
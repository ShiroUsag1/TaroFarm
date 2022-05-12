import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Begining() {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Merriweather': require('../../../../assets/fonts/Merriweather/Merriweather.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.txtH1}>Começando o tarot    como um iniciante?</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>
    
            <Text style={styles.txtparagraf}>Como já mencionei, você não precisa possuir habilidades psíquicas para fazer leituras de tarot. Todos os que conseguem absorver novas informações e estão motivados para saber mais podem aprender a ler as cartas de tarot. Você pode assumi-la como um novo hobby e até mesmo como uma profissão, se continuar com ela.</Text>
            <Text style={styles.txtparagraf}>É bom entender que existem dois tipos diferentes de leituras de tarot: leitura de perguntas e leitura geral/aberta.</Text>
            <Text style={styles.txtparagraf}>Quando você começa sua jornada no tarot, há algumas coisas boas para saber. O primeiro vai economizar muito tempo e evitar que você se canse. Isso é para entender que o tarot é mais sobre fortalecer sua intuição do que memorizar todos os significados e símbolos de cada carta do tarot.</Text>
            <Text style={styles.txtparagraf}>A segunda é que não há acertos e erros no tarot. Se seu instinto está lhe dizendo que algo parece certo, então é assim que você deve fazer. Não se preocupe muito se você está embaralhando as cartas da maneira certa ou interpretando as cartas de tarot invertidas de uma determinada maneira. Não há ninguém que possa lhe dizer a ciência exata do tarot.</Text>
            <Text style={styles.txtparagraf}>Mas, para começar, a primeira coisa de que você precisa é um baralho de tarot.</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 1')}}>Etapa 1</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Etapa 2</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 3')}}>Etapa 3</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 4')}}>Etapa 4</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
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
        fontSize: 28
    },
    
    txtH3:{
        textAlign: "center",
        width:"80%",
        fontFamily:'Merriweather',
        color: '#fff',
        paddingLeft:18,
        margin:10,
        textDecorationLine: 'underline',
        fontSize: 22
    },
    txtparagraf: {
        textAlign:"justify",
        fontFamily:'Merriweather',
        color: '#fff',
        marginBottom: 10,
        marginLeft: 20,
        marginRight:15,
        fontSize:20
    },

    txtlist: {
        textAlign:"justify",
        fontFamily:'Merriweather',
        color: '#fff',
        marginBottom: 10,
        marginLeft: 40,
        marginRight:15,
        fontSize:18,
    },

    bold:{
        fontWeight:"bold"
    }
});
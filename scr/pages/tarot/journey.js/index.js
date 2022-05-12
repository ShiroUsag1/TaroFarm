import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Journey() {

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
            <Text style={styles.txtH1}>Pratique, pratique, pratique a ler cartas e Comece sua jornada de tarot!</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>

            <Text style={styles.txtparagraf}>Com o tempo e com a prática, você aprenderá a confiar em sua intuição e a ter mais confiança ao fazer leituras. Você notará cada vez mais detalhes na estrutura do tarot e como as coisas se associam entre os naipes, os números e as diferentes cartas da corte. Você também poderá ver o enredo dos arcanos maiores com mais clareza. Você começará a se conectar com as cartas e seus significados em um nível mais profundo, o que significa que terá uma associação com elas. Isso permite que você se lembre das cartas e interprete seus significados para um problema que o consulente tem.</Text>
            <Text style={styles.txtparagraf}>Espero que este artigo tenha lhe dado uma inspiração para começar a aprender o tarot. Também espero que tenha dado a você a vontade e a crença de que qualquer pessoa pode aprender a ler tarot. Portanto, eu queria tornar esta introdução aos fundamentos do tarot o mais compreensível possível. Eu também espero que as outras informações aqui no tarotFarm.com.br possam ajudá-lo a se aprofundar no mundo do tarot.</Text>
            <Text style={styles.txtparagraf}>As cartas do tarot nos permitem revelar e confiar em nossa sabedoria interior, aumentar a compreensão e, assim, nos ajudar a resolver problemas práticos em nossas vidas. Você pode usá-lo para autodesenvolvimento, esclarecimento de objetivos, tomada de decisões, ajudar aos outros – as possibilidades são inúmeras.</Text>
            <Text style={styles.txtparagraf}>Bons estudos!</Text>
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
    txtparagraf: {
        textAlign:"justify",
        fontFamily:'Merriweather',
        color: '#fff',
        marginBottom: 10,
        marginLeft: 20,
        marginRight:15,
        fontSize:20
    },
});
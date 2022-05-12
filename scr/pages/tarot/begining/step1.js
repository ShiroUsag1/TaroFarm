import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Step1() {

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
                <Text style={styles.txtH1}> Compre um baralho         de tarot.</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>
            
            <Text style={styles.txtparagraf}>Caso você nunca tenha experimentado uma leitura de tarot, vamos resumir. Envolve um leitor de tarot que interpreta as cartas para uma pessoa que está procurando respostas para alguma área ou questão problemática em sua vida. A leitura nem sempre precisa de duas pessoas, pois o leitor também pode analisar as cartas só para si. Ler para si mesmo é, na verdade, uma ótima maneira de praticar as leituras do tarot.</Text>
            <Text style={styles.txtparagraf}>É bom entender que existem dois tipos diferentes de leituras de tarot: leitura de perguntas e leitura geral/aberta.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>As leituras de perguntas</Text> se concentram em uma pergunta específica que está na mente do consulente. Talvez alguns desafios os estejam incomodando e queiram entender por que isso está acontecendo e o que podem fazer a respeito.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>As imagens das cartas: </Text>como um iniciante, será mais fácil quando as cartas revelarem detalhes de seus significados por meio das ilustrações. As imagens do deck de Rider Waite são explícitas e baseadas em narrativas, então aqui eu voltaria a torcer por elas.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>O tamanho das cartas: </Text>Algumas cartas de tarot vêm em formatos enormes, portanto, certifique-se de saber o que está comprando. Os decks “gigantes” são ótimos para exibir cada pequeno detalhe da carta, pois têm uma grande tela. A desvantagem é que são muito difíceis de transportar e manusear.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>A qualidade das cartas:</Text>Verifique e analise sobre a qualidade da carta. Alguns baralhos tendem a se desgastar rapidamente devido ao material barato que foi usado na fabricação das cartas. Os baralhos de tarot não são incrivelmente caros, mas não é agradável ver um baralho recém-comprado se desgastando em semanas ou meses. Portanto, verifique os comentários sobre a qualidade.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>Sua intuição: </Text>finalmente, pondere como cada baralho agrada a você. Leve em consideração todas as coisas que acabei de mencionar, mas no final, confie na sua intuição e escolha o baralho que parecer certo para você.</Text>
            <Text style={styles.txtparagraf}>Devido à natureza narrativa das ilustrações e aos recursos disponíveis online, minha recomendação seria um deck baseado nas imagens de Rider Waite. O baralho Rider tarot é o baralho mais popular do mundo, mas também existem opções disponíveis que baseiam suas ilustrações no Rider Waite, como o Baralho Modern Witch Tarot. É um deck de alta qualidade de que gosto muito.</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Etapa 2</Text>
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
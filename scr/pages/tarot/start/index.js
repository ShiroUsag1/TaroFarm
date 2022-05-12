import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Start() {

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
                <Text style={styles.txtH1}>O que é tarot?</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>
            
            <Text style={styles.txtparagraf}>O tarot vem com muitos conceitos errados. Muitos ainda vêem isso como uma coisa dos hippies ou pensam em uma cena estereotipada onde uma mulher psíquica de cabelos escuros lê fortunas e infortúnios em uma sala à luz de velas. Mas, para a surpresa de muitas pessoas, o poder do tarot moderno está em nos ajudar a acessar nossa intuição e sabedoria interior, em vez de nos dizer nosso futuro.</Text>
            <Text style={styles.txtparagraf}>As origens do tarot estão enraizadas na Itália do século 15, onde as cartas foram inicialmente usadas para um jogo de cartas chamado Tarrochi. Conforme o jogo ganhou popularidade, ele se espalhou para outros países europeus como a França, onde eles traduziram o nome Tarrochi para tarot.</Text>
            <Text style={styles.txtparagraf}>No final do século 18, o baralho do tarot se desenvolveu em sua forma atual de 78 cartas, consistindo em quatro naipes de 14 cartas e 22 cartas de trunfos adicionais. Por volta da mesma época, algumas pessoas começaram a usar o baralho de tarot para fins divinatórios. O primeiro leitor de tarot profissional foi Jean-Baptiste Alliette, conhecido como “Eteilla“. Ele foi o primeiro a desenvolver os significados divinatórios das cartas e as correspondências entre o tarot, a astrologia e os quatro elementos clássicos – água, ar, fogo e terra. Ele também introduziu os conceitos do que mais tarde ficou conhecido como Arcanos Maiores e Menores – 22 trunfos – os Arcanos Maiores e as 56 cartas de naipe restantes – os Arcanos Menores.</Text>
            <Text style={styles.txtparagraf}>Pouco mais de 100 anos depois, em 1909, o poeta britânico americano Arthur Edward Waite, com a ilustradora Pamela Colman Smith, criaram o baralho Rider-Waite tarot. Os significados divinatórios descritos no baralho Rider Waite foram significativamente baseados nos escritos do grupo da Ordem Hermética da Golden Dawn, ao qual Arthur Waite pertencia. Foi o primeiro baralho a ilustrar todas as 78 cartas quando, na época, os outros baralhos só incluíam imagens únicas para as 22 cartas dos Arcanos Maiores.</Text>
            <Text style={styles.txtparagraf}>A popularidade da leitura do tarot explodiu nas décadas de 1960 e 1970, quando as leituras do tarot tornaram-se associadas ao movimento da Nova Era. Nos últimos 30 anos, a leitura de cartas de tarot tem sido cada vez mais aplicada à introspecção pessoal e ao crescimento pessoal. E é aqui que estamos agora.</Text>
            <Text style={styles.txtparagraf}>Hoje, podemos usar as cartas de tarot como ferramentas para o nosso crescimento. E o mais importante, eles podem mudar o rumo de nossas vidas. As cartas de tarot nos permitem refletir sobre nosso momento presente e ver o que nos impede de realizar nosso potencial máximo.</Text>
            <Text style={styles.txtparagraf}>Através da leitura do tarot, você pode observar sua situação atual de diferentes ângulos e revelar seu conhecimento interior. As cartas nos permitem ver quais ações precisam ser tomadas para nos levar onde queremos estar. Embora as cartas não nos exponham o futuro, elas nos dão uma visão valiosa do nosso passado, presente e futuro, com base em nosso caminho atual.</Text>

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
import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Step3() {

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
                <Text style={styles.txtH1}>Aprenda a fazer perguntas ao tarot</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>
            

            <Text style={styles.txtparagraf}>Agora que aprendemos sobre a estrutura do baralho de tarot e estamos familiarizados com os conceitos dos arcanos Maiores e Menores, podemos começar a tirar as cartas e interpretá-las. É bom apresentar perguntas ao tarot e interpretar o significado do problema.</Text>
            <Text style={styles.txtparagraf}>Você pode perguntar ao tarot o que quiser, mas há algumas coisas a serem apontadas. O poder de uma leitura de tarot reside em nos expor a algo que já sabemos, mas não podemos ou não queremos ver naquele momento. Para obter uma visão e perspectiva sobre os problemas para os quais buscamos respostas, as perguntas que apresentamos no tarot devem ser abertas, algo que somos capazes de influenciar e sobre o presente.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>Mantenha as perguntas abertas: </Text>Perguntas que permitem que alguns detalhes sejam dados oferecem mais valor ao consulente do que perguntas com resultado sim e não.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>Mantenha perguntas sobre um assunto sobre o qual o consulente tem influência: </Text>Ao fazer perguntas sobre coisas ou alguém sobre quem ele não tem poder, não será benéfico para o consulente.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>Mantenha as perguntas focadas no presente: </Text> Não podemos mudar o passado, então não há por que focalizar nas perguntas aí. Isso não significa que não possamos observar nossa história para aprender sobre o presente. O resultado pode orientar as ações a serem tomadas para que o futuro seja o desejado.</Text>
            <Text style={styles.txtparagraf}>É bom praticar tirando uma carta inicialmente, mas quando quiser tornar as coisas um pouco mais interessantes, você pode começar a usar os 22 arcanos maiores e claro por fim usar o tarot completo.</Text>
            
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
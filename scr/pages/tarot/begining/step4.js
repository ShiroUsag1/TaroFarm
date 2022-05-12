import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Step4() {

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
                <Text style={styles.txtH1}>Aprenda uma tiragem      de tarot básica</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>

            <Text style={styles.txtparagraf}>Como já mencionado, uma tiragem dá à leitura sua estrutura para explorar as questões do consulente. Existem toneladas de tiragens diferentes e algumas delas podem ser realmente sofisticadas, mas complicadas. Portanto, é bom começar com uma fácil.</Text>
            <Text style={styles.txtparagraf}>Uma das tiragens de tarot mais simples para usar em uma leitura é a tiragem do passado, presente e futuro. É uma ótima tiragem de tarot porque é fácil de usar e oferece uma excelente visão, não importa o nível de aprendizagem que você seja.</Text>
            <Text style={styles.txtparagraf}>Ao usar a distribuição do passado, do presente e do futuro, o tarólogo coloca três cartas do baralho na mesa e as vira para revelar as cartas.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>A carta da esquerda representa o passado: </Text>as pessoas, energias e experiências do passado estão afetando a situação</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>A carta do meio representa o presente: </Text>O que o consulente deve perceber sobre o assunto neste momento.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>A carta da direita representa o futuro: </Text> em que direção as coisas estão se movendo se o consulente  continuar neste caminho.</Text>
            <Text style={styles.txtparagraf}>Quando você começa com uma tiragem simples como esta, pode praticar como colocar a mensagem em conjunto. Em breve, você será capaz de ter uma narrativa em suas leituras e, eventualmente, poderá avançar para tiragens mais avançadas, como a Cruz Célta.</Text>

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
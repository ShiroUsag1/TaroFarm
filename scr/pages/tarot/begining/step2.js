import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Step2() {

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
                <Text style={styles.txtH1}>Aprenda a estrutura do baralho de tarot</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>
            
            <Text style={styles.txtparagraf}>Depois de comprar um baralho de tarot, você está pronto para começar a aprender os fundamentos do tarot. As cartas de tarot são um baralho de 78 cartas, todas com significados únicos. Antes de começar a praticar as leituras do tarot, é bom se familiarizar com o baralho. Você não precisa saber cada carta de cor, não é essencial, mas é bom estar familiarizado com os conceitos dos arcanos maiores e menores.</Text>
            <Text style={styles.txtparagraf}>Quando você os entender, será mais fácil fortalecer sua intuição, que será a ferramenta mais essencial ao fazer as leituras do tarot. Então, vamos dar uma olhada em ambos os arcanos individualmente.</Text>
            <Text style={styles.txtH2}>Arcanos Maiores</Text>
            <Text style={styles.txtparagraf}>Os arcanos maiores são um conjunto de 22 cartas. Cada carta dos arcanos maiores representa os estágios espirituais e as lições de vida mais significativas que encontramos durante nossas vidas. Essas lições são universais para todos nós em nosso caminho para a conclusão e a iluminação.</Text>
            <Text style={styles.txtparagraf}>Quando você os encontra em uma leitura de tarot, algo importante está sendo lançado, alguma conexão está ocorrendo ou algo novo está surgindo. Como representam lições mais significativas, também costumam levar mais tempo para serem percebidas.</Text>
            <Text style={styles.txtparagraf}>Ajuda a entender os arcanos maiores se você olhar para eles como uma história sequencial e simbólica pela qual o Louco passa em seu caminho para a iluminação. Essa história pode ser dividida em fases que não são imediatamente evidentes quando apenas percorremos nas cartas.</Text>
            <Text style={styles.txtparagraf}>Portanto, O Louco é uma carta com o número “0” e está no início. Os 21 estágios arquetípicos e as lições de vida podem ser divididos em três fases.</Text>
            <Text style={styles.txtlist}>◉ As primeiras sete cartas que o Louco encontra <Text style={styles.bold}>são pessoas e situações com vários níveis de poder.</Text> Ele aprende o que significa possuir poder. Como abusar dele ou como beneficiar o mundo usando-o com sabedoria.</Text>
            <Text style={styles.txtlist}>◉ As próximas sete cartas que ele encontra <Text style={styles.bold}>são características de crenças e transformação de perspectivas.</Text> Ele aprende sobre mudanças em sentimentos, pontos de vista e pensamentos. Aqui ele percebe quem ele realmente é.</Text>
            <Text style={styles.txtlist}>◉ As últimas sete cartas mostram <Text style={styles.bold}>os desafios e recompensas de que a alma precisa para ficar cheia.</Text> Aqui o Louco aprende sobre espiritualidade e sobre coisas que vão além do auto aperfeiçoamento. É aqui que ele chega mais perto da conclusão, aprendendo as lições cármicas da vida.</Text>
            <Text style={styles.txtparagraf}>Este método ajuda a se colocar no lugar do Louco e refletir sobre diferentes situações e lições de sua própria vida.</Text>
            
            <Text style={styles.txtH2}>Arcanos Menores</Text>
            <Text style={styles.txtparagraf}>As 56 cartas restantes são os Arcanos Menores. Eles nos dão uma visão sobre nossos desafios, oportunidades e experiências de altos e baixos que encontramos em nossa vida cotidiana.</Text>
            <Text style={styles.txtparagraf}>Enquanto as cartas de Arcanos Maiores podem nos mostrar a energia geral de uma situação particular, as cartas de Arcanos Menores têm uma influência temporária em nossas vidas. Eles representam uma energia que está passando por nós agora, e nos fornecem detalhes e orientações sobre quais ações tomar neste momento para alcançar nossos objetivos. Seu impacto pode ser facilmente alterado, se assim preferirmos. Depende apenas do curso de ação que decidirmos tomar.</Text>
            <Text style={styles.txtparagraf}>Os Arcanos Menores tem uma estrutura semelhante a um baralho de cartas tradicional e, portanto, inclui quatro naipes. Mas em vez dos naipes clássicos das cartas de baralho, os naipes nos Arcanos Menores são Copas, Ouros, Espadas e Paus. As cartas de cada naipe são numeradas de um a dez, mais quatro cartas da corte – o valete/pajem, o cavaleiro, a rainha e o rei.</Text>
            <Text style={styles.txtparagraf}>Aprender 56 cartas pode parecer assustador, mas felizmente alguns conceitos explicativos ajudarão com seus significados. Cada naipe se relaciona a um dos elementos clássicos e tem um significado em relação a uma abordagem específica da vida.</Text>
            
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Naipe de Copas;</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Naipe de Ouros;</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Naipe de Espadas;</Text>
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 2')}}>Naipe de Paus;</Text>
            
            <Text style={styles.txtH3} onPress={() => { navigation.navigate('Etapa 3')}}>Etapa 3</Text>

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
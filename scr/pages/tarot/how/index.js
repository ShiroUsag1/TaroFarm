import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function HowWorks() {

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
            <Text style={styles.txtH1}>Como funciona uma leitura de tarot?</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../assets/linha.png')} />
            </View>

            <Text style={styles.txtparagraf}>Caso você nunca tenha experimentado uma leitura de tarot, vamos resumir. Envolve um leitor de tarot que interpreta as cartas para uma pessoa que está procurando respostas para alguma área ou questão problemática em sua vida. A leitura nem sempre precisa de duas pessoas, pois o leitor também pode analisar as cartas só para si. Ler para si mesmo é, na verdade, uma ótima maneira de praticar as leituras do tarot.</Text>
            <Text style={styles.txtparagraf}>É bom entender que existem dois tipos diferentes de leituras de tarot: leitura de perguntas e leitura geral/aberta.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>As leituras de perguntas</Text> se concentram em uma pergunta específica que está na mente do consulente. Talvez alguns desafios os estejam incomodando e queiram entender por que isso está acontecendo e o que podem fazer a respeito.</Text>
            <Text style={styles.txtlist}>◉ <Text style={styles.bold}>As leituras abertas </Text>enfocam aspectos mais amplos da vida, em vez de uma área de problema ou questão específica. As leituras abertas geralmente cobrem um assunto específico, como carreira ou relacionamentos, dependendo do que é essencial para o consulente naquele momento.</Text>
            <Text style={styles.txtparagraf}>Antes de a leitura começar, normalmente, o leitor embaralha as cartas de tarot. Enquanto isso está acontecendo, a pessoa que está recebendo a leitura deve se concentrar na pergunta ou área para a qual deseja orientação. Quando a intuição diz que eles estão prontos, o consulente geralmente corta o baralho ao meio e coloca as cartas viradas em cima da mesa.</Text>
            <Text style={styles.txtparagraf}>Quando a leitura real começa, o tarólogo faz uma tiragem de cartas, conforme a situação para interpretar a mensagem do tarot. As tiragens de tarot fornecem à leitura uma estrutura na qual o tarólogo pode explorar as perguntas do consulente. Cada posição na tiragem reflete um aspecto da pergunta do consulente a ser considerado.</Text>
            <Text style={styles.txtparagraf}>Quando as cartas são reveladas, o tarólogo leitor olha para as cartas e tenta interpretá-las. Os tarólogos mais experientes provavelmente se lembrarão do significado de cada carta. Ainda assim, não é necessário memorizá-los de cor para começar no tarot. As cartas de tarot contêm inúmeras pistas de suas intenções nas imagens das cartas, o que já dá ao tarólogo dicas sobre o que elas podem significar. Algumas das coisas que o leitor pode procurar são:</Text>
            <Text style={styles.txtlist}>◉ Números</Text>
            <Text style={styles.txtlist}>◉ Símbolos</Text>
            <Text style={styles.txtlist}>◉ Cores</Text>
            <Text style={styles.txtlist}>◉ Expressões faciais</Text>
            <Text style={styles.txtlist}>◉ Personagens</Text>
            <Text style={styles.txtlist}>◉ Interações e</Text>
            <Text style={styles.txtlist}>◉ Outros elementos que definem o clima em cada carta</Text>
            <Text style={styles.txtparagraf}>Como um iniciante de tarot, embora as imagens das cartas forneçam muitos detalhes, você provavelmente precisará de alguma referência para ajudá-lo com as cartas. Existem muitos materiais de referência com cartas de tarot disponíveis online e, normalmente, há um “livrinho” que vem com o baralho de tarot que você pode usar.</Text>
            <Text style={styles.txtparagraf}>Depois que o tarólogo tem uma noção do que as cartas estão dizendo, o tarólogo então transforma essa mensagem em uma narrativa baseada na pergunta do consulente. Pode ser desafiador no início, mas à medida que você ganha mais experiência, a narrativa se torna mais natural. Você aprenderá a confiar em sua intuição. Uma parte significativa da leitura do tarot é interpretar uma seleção aleatória de eventos e dar-lhes significados com base na sua intuição.</Text>
            <Text style={styles.txtparagraf}>Qualquer que seja o tipo de leitura de tarot que ocorra, o resultado desejado é que o consulente se sinta mais confiante sobre as escolhas que precisa fazer para resolver seu problema. A mensagem nem sempre é o que eles esperavam, mas a boa notícia é que a mensagem do tarot não está gravada em pedra. O consulente pode observar como a mensagem ressoa com suas preferências pessoais. Eles sempre têm o poder de alterar o resultado da leitura com as ações que decidem realizar.</Text>

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
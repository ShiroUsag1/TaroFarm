import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Star() {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Merriweather': require('../../../../../../assets/fonts/Merriweather/Merriweather.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    

    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.txtH1}>A Estrela</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-17.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave de A Estrela</Text>
                <Text style={styles.txtparagraf}>Para entendermos melhor as interpretações relacionadas à carta de baralho A Estrela, vamos elencar as palavras-chave relacionadas a ele.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: Esperança, inspiração, positividade, renovação, espiritualidade, cura</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: Desespero, negatividade, falta de fé, desânimo, desesperança, perda de confiança, perda de um amigo, sem futuro, sem sonhos</Text>

            <Text style={styles.txtH2}>A Estrela significado </Text>
                <Text style={styles.txtparagraf}>Quando a carta do tarot A Estrela está na posição vertical, indica esperança para o futuro, inspiração e paz. Segue A Torre que era uma carta cheio de estragos. Portanto, sua presença é um sinal de alívio que deve fazer você se sentir positivo, motivado e livre.</Text>
                <Text style={styles.txtparagraf}>A Estrela quer que você abra seu coração para o Universo, perceba sua força interior e tenha fé no futuro. Você pode ter passado por um terrível desafio de vida. Você conseguiu passar por isso sem perder a esperança.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>Quando se trata de amor, a Estrela traz esperança e fé renovadas e uma sensação de bênção do Universo. Você pode ter sofrido recentemente, mas agora está entrando em uma fase de paz e amor em sua vida, com uma compreensão mais profunda de si mesmo e dos outros. Seu senso de positividade pode ser um poderoso ímã para você nestes tempos, dando-lhe uma sensação de carisma e charme</Text>
                        <Text style={styles.txtparagraf}>Se você esta solteiro, a Estrela o libertará de relacionamentos passados ​​e se abrirá para um novo amor. Se você teve um rompimento recentemente, esta carta sugere que o pior já passou e que você está gradualmente curando seu coração para poder seguir em frente.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento e os tempos recentes têm sido difíceis, a Estrela surge como um sinal de esperança. Isso indica que seu relacionamento permaneceu forte e tem o poder de curar a si mesmo. Contanto que vocês dois se mantenham comunicativos e honestos um com o outro, os tempos difíceis da vida só vão aproximar vocês dois.</Text>
                    <Text style={styles.txtH3}>Trabalho e Carreira</Text>
                        <Text style={styles.txtparagraf}>Como já sabemos, o estrela está cheio de inspiração e desejos se tornando realidade. Portanto, é um cartão muito positivo a se receber se você está em busca de uma evolução profissional ou de uma situação financeira melhor.</Text>
                        <Text style={styles.txtparagraf}>Se você estava esperando por uma promoção, a Estrela é um lembrete para manter suas esperanças altas. Talvez apareça uma nova posição ou um emprego inteiramente novo, o que lhe dará imensa satisfação. Se você passou por um período difícil ou estressante no trabalho, a Estrela também sinaliza um período de cura. Este deve ser um momento calmo e tranquilo enquanto você se recupera.</Text>
                        <Text style={styles.txtparagraf}>Falando financeiramente, se você tem tido problemas de dinheiro, a estrela diz que existe uma maneira de equilibrar suas finanças. Como o estrela traz uma sensação de positividade e otimismo, talvez agora seja um excelente momento para fazer investimentos razoáveis.</Text>
                    <Text style={styles.txtH3}>Saúde e Bem Estar</Text>
                        <Text style={styles.txtparagraf}>Por ser uma carta de cura, a Estrela é uma visão maravilhosa para qualquer pessoa preocupada com seu corpo ou mente. Raramente vejo a estrela aparecer em uma leitura para alguém que lida com problemas de saúde. Mas, se isso acontecer, diz a você para permanecer positivo e otimista de que tempos melhores estão por vir. a estrela quer que você encontre paz em todas as áreas de sua vida.</Text>
                        <Text style={styles.txtparagraf}>A Estrela tem uma forte conexão espiritual, então não se surpreenda se você se sentir mais em sintonia com o Universo do que de costume. Você percebeu que as dificuldades do passado o tornaram mais forte e sábio. Esteja aberto a novas idéias e crescimento, e ouça a voz silenciosa dentro de você.</Text>

            <Text style={styles.txtH2}>A Estrela significado invertido</Text>
                <Text style={styles.txtparagraf}>A Estrela na posição invertida pode indicar que você está se sentindo sem esperança. Você pode estar se sentindo confuso com os desafios da vida e questionando por que está passando por isso. Isso pode deixar qualquer um se sentindo miserável e desmotivado. Ainda assim, em tempos como estes, você precisa assumir a responsabilidade e decidir superar isso. E você vai! Aprecie esta oportunidade de crescer mais forte. Considere isso uma bênção, não um castigo</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>Quando se trata de amor e relacionamentos, a carta do tarot A Estrela tem muito a ver com perder a fé e focar na negatividade. Não se trata apenas de relacionamentos, mas a dúvida e a perda da fé também podem se aplicar a você e aos seus sentimentos sobre o amor em geral.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento, a Estrela invertida indica que você está se concentrando no negativo e perdendo os aspectos positivos de seu relacionamento. Você pode sentir que seu relacionamento se tornou enfadonho e monótono e que você e seu parceiro perderam a conexão em algum nível. Esses problemas podem ser consertados, mas primeiro, você tem que limpar qualquer energia negativa e trabalhar para revitalizar sua conexão.</Text>
                        <Text style={styles.txtparagraf}>Se você está solteiro há algum tempo, a negatividade pode começar a aparecer como cinismo. Pode fazer você acreditar que o amor acabará e apenas criará dor. Em momentos como esse, é vital saber que a negatividade só aumentará as oportunidades. Positividade é o que atrai.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Quando a Estrela aparece invertida em uma leitura de carreira, é provável que sua negatividade afete seu trabalho. Seu entusiasmo parece ter acabado ou sua criatividade está bloqueada por todos os pensamentos pessimistas. Você precisa começar a se concentrar no que é positivo e mudar sua atitude. Provavelmente, as coisas não estão tão ruins quanto você se permite acreditar. A Estrela invertida também pode indicar que você não está usando sua criatividade e está desperdiçando seus talentos.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, e você tem tido dificuldades financeiras, a carta do tarot invertida diz que todos os problemas estão ao seu alcance. Mas isso só pode acontecer se você conseguir reunir positividade para ver as coisas sob uma nova luz e se esforçar. Reavalie suas metas monetárias e pergunte-se se está fazendo as coisas necessárias para conseguir o que deseja. Abrir seu coração para uma perspectiva mais positiva também pode abrir seus olhos para as oportunidades.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>A Estrela invertida pode indicar que seus problemas de saúde são amplificados por suas preocupações e negatividade no momento. Você pode estar fazendo com que sinta sintomas não existentes psicologicamente. Se você está preocupado com um problema de saúde, é melhor consultar um médico e relaxar. Além disso, concentre-se nos aspectos positivos de sua saúde e não se preocupe tanto.</Text>
                        <Text style={styles.txtparagraf}>A Estrela invertida exorta você a reservar um tempo para cuidar de si mesmo e nutrir profundamente seu nível pessoal e espiritual. Suas reservas de energia podem estar baixas e, de fato, esgotadas, então, em vez de se esforçar ainda mais, reserve um tempo só para você. Mime-se e reconecte-se às suas práticas espirituais diárias. Tome um banho energético ou um ritual de purificação ajudará a nutri-lo em um nível mais profundo.</Text>

            <Text style={styles.txtH2}>A Estrela Sim ou Não</Text>
                <Text style={styles.txtparagraf}>A Estrela sugere que os tempos que virão serão repletos de crescimento espiritual, possibilidades positivas e felicidade geral. Portanto, a estrela em leituras sim ou não é um SIM firme.</Text>

            <Text style={styles.txtH2}>Combinações A Estrela</Text>
                <Text style={styles.txtparagraf}>Quando A Estrela combinada com outras cartas do tarot, dá positividade, otimismo e esperança à leitura. A mensagem principal aqui é que as coisas vão melhorar. Vamos dar uma olhada nesses dois exemplos</Text>
                    <Text style={styles.txtH3}>A Estrela e O Louco</Text>
                        <Text style={styles.txtparagraf}>A próxima aventura vai ser abençoada pelo Universo. Isso o fará crescer e aprender coisas que o farão crescer como pessoa.</Text>
                    <Text style={styles.txtH3}>A Estrela e A Imperatriz</Text>
                        <Text style={styles.txtparagraf}>Ambas as cartas são de natureza muito positiva e, portanto, essa é uma combinação muito desejável. O bem-estar geral está presente em ambas as cartas. A Imperatriz também tem uma associação com fertilidade e instinto maternal. Você também não pode ignorar os sinais de fertilidade na carta do tarot a Estrela, com a mulher nua regando o ambiente. Portanto, essa combinação é um forte indício de que uma criança está chegando em sua vida.</Text>
                    
            <Text style={styles.txtH2}>A Estrela como tipos de personalidade</Text>
                <Text style={styles.txtparagraf}>As personalidades associadas às cartas do tarot A Estrela encontraram conforto com elas mesmas ou com suas situações. Eles são pessoas positivas que ganharam força interior e espiritual com suas experiências anteriores e estão confiantes em si mesmas. Eles amadureceram com a experiência que lhes permite influenciar positivamente as pessoas.</Text>

            <Text style={styles.txtH2}>A Estrela como sentimentos</Text>
                <Text style={styles.txtparagraf}>Sentindo-se sábio, a Estrela dá esperança e fé a todos que a recebem. É uma bênção do Universo que as coisas logo estejam mudando para o lado positivo. Portanto, você deve olhar com muito otimismo para o futuro.</Text>
                <Text style={styles.txtparagraf}>Quando se trata de perguntas sobre como alguém se sente em relação a você, A Estrela dá uma sugestão de positividade. A pessoa provavelmente teve dificuldades e até mesmo abandono em relacionamentos anteriores e, portanto, está procurando por algo básico. Eles precisam criar confiança antes de se sentirem confortáveis, por isso tome cuidado para não dar sinais confusos de sua parte.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta de tarot A Estrela</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot A Estrela?</Text>
                    <Text style={styles.txtparagraf}>A carta de tarot a Estrela está associado a esperança, renovação e perspectivas futuras brilhantes. Para quem o recebe, traz uma sensação de calma e tranquilidade para o futuro.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot A Estrela invertida?</Text>
                        <Text style={styles.txtparagraf}>Quando invertida, a carta do tarot a Estrela está associada à perda de fé e pensamento negativo.</Text>
                <Text style={styles.txtH3}>O que a carta do tarot A Estrela significa em uma leitura de amor?</Text>
                    <Text style={styles.txtparagraf}>Nas leituras de tarot sobre o amor, a Estrela indica uma esperança renovada e uma sensação de bênção do Universo. Você está entrando em uma fase tranquila de sua vida, com uma compreensão mais profunda de si mesmo e dos outros, o que lhe dá uma sensação de carisma e charme aos olhos das outras pessoas.</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
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
    },

    carta: {
        margin:10,
        width: 350,
        height: 600
    }
});
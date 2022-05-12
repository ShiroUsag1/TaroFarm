import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Devil() {

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
            <Text style={styles.txtH1}>O Diabo</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-15.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave O Diabo</Text>
                <Text style={styles.txtparagraf}>Antes de pularmos nos significados da carta de tarot o Diabo no amor, dinheiro e saúde, vamos dar uma olhada nas palavras-chave relacionadas a esta carta.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: tentação física e material, vício, obsessões, dependência e depressão.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: Limpando anexos prejudiciais, voltando de pensamentos sombrios, liberdade das restrições</Text>

            <Text style={styles.txtH2}>O Diabo significado</Text>
                <Text style={styles.txtparagraf}>O tarot O Diabo expressa como o vício, a obsessão e os relacionamentos prejudiciais podem fazer você se sentir fora de controle. O Diabo o adverte para não ser muito restringido por desejos e relacionamentos materialistas que o impedem de ser a melhor versão de si mesmo. Isso o incentiva a observar as áreas da vida que você sente que não controla e tomar medidas para a mudança.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>Se você esta solteiro, está entrando em um período de diversão. É provável que você tenha um caso apaixonado com alguém ou com várias outras pessoas. Você não vê perspectivas de longo prazo com esses parceiros, mas tudo na frente da paixão funciona muito bem. Enquanto você se diverte, certifique-se de não fazer falsas promessas a outras pessoas e de se manter protegido contra DSTs. Alternativamente, o diabo pode implicar dependência, fazendo com que você permita que outros tirem vantagem de você. Se for esse o caso, você precisa trabalhar seus problemas de auto-estima antes de se colocar à disposição dos outros.</Text>
                        <Text style={styles.txtparagraf}>O Diabo também pode sinalizar ciúme ou co-dependência nos relacionamentos atuais. Ambos podem ser prejudiciais ao seu relacionamento, portanto, certifique-se de construir confiança e manter a individualidade. Em uma nota positiva, o Diabo marca um período de alta energia sexual. Portanto, esteja preparado para se divertir muito nessa área.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Diabo nas leituras de carreira pode indicar que você está se sentindo confinado em seu local de trabalho. Você sente que não tem outras opções a não ser resistir ao seu trabalho e aos seus colegas. A perspectiva de fugir de um emprego seguro não parece plausível, então deixa você se sentindo impotente. Não fique deprimido com isso. O Diabo o incentiva a abrir os olhos para outras opções. Existem mais opções disponíveis para você do que você pensa. Você só precisa acordar para eles, reunir sua força de vontade e assumir o controle com suas próprias mãos.</Text>
                        <Text style={styles.txtparagraf}>O Diabo também é um lembrete para não ser muito controlado pelos desejos materialistas. Ele o incentiva a buscar coisas que o deixem apaixonado, em vez de buscar apenas ganhos financeiros. Portanto, considere o Diabo um sinal de discrição em suas transações financeiras. Dê uma olhada no que é realmente importante para você e certifique-se de não gastar dinheiro com coisas apenas para satisfazer seus desejos materialistas.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Em leituras relacionadas à saúde, a carta do tarot o Diabo pode indicar excesso de indulgência ou dependência de hábitos pouco saudáveis. Observe seus padrões atuais objetivamente e tente identificar se há algo que você está cedendo em excesso. Às vezes, o Diabo sugere depressão ou outros problemas mentais. Se você acha que esse é o caso, você deve dirigir a um profissional de saúde e não consultar mais as cartas.</Text>
                        <Text style={styles.txtparagraf}>Nas leituras espirituais, o Diabo percebe que seu foco é demais nos desejos materialistas. Eles fizeram com que você o afastasse de seu caminho espiritual. Leve o Diabo como um lembrete para trazer esses aspectos de volta à sua vida para recuperar o equilíbrio. Passe um tempo com as pessoas que você ama e contemple o que realmente traz felicidade para sua vida.</Text>

            <Text style={styles.txtH2}>O Diabo significado invertido</Text>
                <Text style={styles.txtparagraf}>Surpreendentemente, a carta de tarot o Diabo invertida carrega muita positividade em seu significado. No entanto, para que funcione a seu favor, você terá que se livrar de alguns anexos maliciosos e prejudiciais que o deixam lento. Isso pode significar abrir mão de relacionamentos e hábitos que não estão lhe servindo de maneira positiva ou mudar de emprego que só está causando tristeza e ansiedade. Ao se retirar desses apêndices doentios, você será capaz de florescer em uma versão melhor de si mesmo.</Text>
                <Text style={styles.txtparagraf}>Portanto, em vez de ver o Diabo invertido como uma carta assustadora, você deve interpretar isso como um chamado para uma jornada de autoaperfeiçoamento.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>A carta invertida do tarot do Diabo nas leituras de amor e relacionamento pode sinalizar que alguns apegos em sua vida o estão impedindo de atingir seu potencial máximo. Modelos emocionais negativos ou obsessões de algum tipo estão impedindo você de encontrar paz em seus relacionamentos. Se você puder deixá-los ir, provavelmente se sentirá no controle de sua vida amorosa e construirá uniões duradouras.</Text>
                        <Text style={styles.txtparagraf}>Às vezes, o diabo invertido pode indicar um aviso de um relacionamento que não permite que você seja você mesmo. Pode ser devido a um parceiro dominador ou inseguranças que você sente. Você precisará reconhecer a beleza que carrega e ter orgulho de si mesmo. Se seu parceiro não estiver disposto a fazer o mesmo, você deve considerar se libertar desse apego doentio.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Diabo invertido em uma leitura de carreira indica que você pode ter se sentido preso em seu trabalho. Você tem se agarrado a ele apenas por desejos financeiros e materialistas. No entanto, você está começando a perceber o que é que o faz feliz. Entender que a estabilidade na vida também pode ser alcançada por outros meios além de apenas ganhar mais dinheiro lhe dará mais espaço para se mover. Lembre-se de que você controla seu próprio destino e não está limitado por nada além de suas próprias atitudes, crenças e comportamento.</Text>
                        <Text style={styles.txtparagraf}>Quando se trata de dinheiro, você provavelmente já tomou medidas para fazer as mudanças necessárias para assumir o controle de suas finanças. Os problemas do seu passado podem ter sido vários. Ainda assim, agora você está assumindo a responsabilidade por suas situações e não depende mais de terceiros para obter ajuda financeira. Isso fará você se sentir melhor quando começar a abraçar sua independência.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Nas leituras relacionadas à saúde, o Diabo invertido é um sinal de boas-vindas para se livrar dos maus hábitos. Você está ganhando o controle de seus vícios, obsessões ou excessos, o que terá um impacto positivo em seu bem-estar. Continue fazendo isso e mantenha o foco no curso atual. Seu corpo e sua mente vão agradecer mais tarde.</Text>
                        <Text style={styles.txtparagraf}>Com relação à espiritualidade, você está encontrando o caminho de volta à luz. Você pode estar explorando pensamentos sombrios. Os sentimentos de ansiedade e estresse o desviaram de seu caminho espiritual, mas agora sua bússola aponta na direção certa novamente. Você está se sentindo cada vez mais conectado com o Universo, então continue nesse caminho.</Text>

            <Text style={styles.txtH2}>O Diabo Sim ou Não</Text>
                <Text style={styles.txtparagraf}>A carta do tarot o Diabo representa vício físico e material, obsessões, dependência e depressão. Em geral, aponta para áreas da vida que têm peso negativo e o incentiva a observar e melhorar nelas. A conotação negativa desta carta obriga a ser um “Não” nas consultas relacionadas com Sim ou Não.</Text>

            <Text style={styles.txtH2}>Combinações O Diabo</Text>
                <Text style={styles.txtparagraf}>Vamos examinar algumas combinações interessantes de cartas de tarot com o Diabo. Quando combinado com outras cartas de tarot, o Diabo traz à tona algumas de nossas fraquezas, como vício, obsessões, dependência e depressão.</Text>
                    <Text style={styles.txtH3}>O Diabo e Os Amantes</Text>
                        <Text style={styles.txtparagraf}>A combinação das cartas de tarot o Diabo e os Amantes é poderosa e intrigante. A representação visual dessas cartas é semelhante, mas totalmente oposta. É como comparar o bem e o mal, a luz e as trevas ou o amor e a luxúria. Essa combinação diz muito sobre os lados opostos. Apesar da área que você observa, ela nos lembra de como as coisas bonitas podem rapidamente se tornar uma peça perigosa se ficarmos obcecados e viciados.</Text>
                    <Text style={styles.txtH3}>O Diabo e O Imperador</Text>
                        <Text style={styles.txtparagraf}>O Imperador é uma carta de tarot de autoridade, liderança e poder. O Diabo é a carta da obsessão e do vício. Essa combinação nos lembra o quão perigosa pode ser a dependência do poder. Como alternativa, pode funcionar como um aviso e apontar um relacionamento dominador em sua vida.</Text>
                    <Text style={styles.txtH3}>O Diabo e O Louco</Text>
                        <Text style={styles.txtparagraf}>Essa combinação é um sinal claro de que alguém está se encaminhando para o perigo em seu novo caminho. Alguém está entrando em uma nova jornada perigosamente rápido e ficando obcecado por isso. Dependendo do que for, as coisas vão extrapolar se não receberem o aviso para desacelerar.</Text>
                    <Text style={styles.txtH3}>O Diabo e A Estrela</Text>
                        <Text style={styles.txtparagraf}>A combinação da Estrela e do Diabo traz uma sensação de alívio para quem busca. Talvez tenha havido um período de apegos doentios na vida do consulente, e a Estrela dá uma sensação de esperança para superá-los.</Text>

            <Text style={styles.txtH2}>O Diabo como tipo de personalidade</Text>
                <Text style={styles.txtparagraf}>As pessoas com a personalidade das cartas de tarot o Diabo são intensas, apaixonadas, sexuais e às vezes narcisistas. Quando elas entram em algo, elas entram em cheio. Seja lá o que for que elas entrem, rapidamente se transforma em uma obsessão. Elas nem sempre pensam no bem dos outros quando procuram o que desejam. Como amantes, elas certamente o manterão aquecido.</Text>

            <Text style={styles.txtH2}>O Diabo como sentimentos</Text>
                <Text style={styles.txtparagraf}>Existem muitos sentimentos ligados a esta carta: obsessão, paixão sexual, ansiedade e depressão. Dependendo do que você está observando, os sentimentos podem variar entre eles.</Text>
                <Text style={styles.txtparagraf}>Se você está se perguntando como alguém se sente por você, o Diabo aparece. É um sinal de que a pessoa tem sentimentos fortes e apaixonados por você. Mas observe que o Diabo também aparece como um pequeno aviso. Certifique-se de que a pessoa não está usando você em seu benefício.</Text>

            <Text style={styles.txtH2}>Perguntas gerais da carta de O Diabo</Text>
                <Text style={styles.txtH3}>O que significa a carta de tarot O Diabo?</Text>
                    <Text style={styles.txtparagraf}>A carta do tarot o Diabo descreve sentimentos um tanto negativos, especialmente aqueles relativos ao mundo material e aos prazeres físicos. Tais como tentação, vício, obsessões, dependência e depressão.</Text>
                <Text style={styles.txtH3}>O que significa a carta de tarot O Diabo invertida?</Text>
                        <Text style={styles.txtparagraf}>A carta de tarot o Diabo invertida significa livrar-se de anexos prejudiciais que o impedem de atingir seu potencial máximo.</Text>
                <Text style={styles.txtH3}>O que a carta de tarot O Diabo significa em uma leitura de amor?</Text>
                    <Text style={styles.txtparagraf}>O Diabo na leitura de tarot simboliza a paixão e a busca pelos prazeres físicos da vida. É um sinal de que seus desejos sexuais estão no auge.</Text>
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
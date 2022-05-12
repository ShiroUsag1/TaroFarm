import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Lovers() {

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
            <Text style={styles.txtH1}>Os Amantes</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-06.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave Os Amantes</Text>
                <Text style={styles.txtparagraf}>Palavras-chave são excelentes meios para memorizar os significados das cartas de tarot, então vamos examiná-las aqui.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: Amor, união, escolhas significativas, harmonia, valores compartilhados, parcerias, romance, uniões.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: Desarmonia, medo de compromisso, falta de responsabilidade, escolhas impensadas, valores desalinhados, desapego, indecisão.</Text>
                <Text style={styles.txtparagraf}>Como sabemos agora, os componentes visuais e palavras-chave os Amantes, vamos avançar em seus significados em amor, relacionamentos, carreira, dinheiro, saúde e espiritualidade.</Text>

            <Text style={styles.txtH2}>Os Amantes significado</Text>
                <Text style={styles.txtparagraf}>A carta de tarot Os Amantes significa amor perfeito, união, harmonia, valores compartilhados e escolhas importantes que precisam ser feitas. A carta de tarot Amantes frequentemente lida com situações relacionadas aos relacionamentos. Ainda assim, pode fornecer uma visão e equilíbrio sobre nossos valores pessoais e oportunidades profissionais também. Quando Os Amantes parece, é um sinal de que você está enfrentando decisões importantes ou vê desenvolvimentos positivos em seus relacionamentos com os outros e com você mesmo.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>A carta de tarot Os Amantes é uma carta muito desejável de se receber em uma leitura de tarot, especialmente em pesquisas sobre amor e relacionamentos. Sinaliza um belo equilíbrio nos relacionamentos e energias complementares nos significados. Também é conhecido como a carta de alma gêmea, significando uma conexão especial entre duas pessoas.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento, a carta do tarot do Amantes indica uma grande quantidade de energia sexual, romance e compaixão retornando ao relacionamento. Você sentirá uma conexão cada vez mais profunda física, mental e espiritualmente. É também uma ótima indicação de valores compartilhados e harmonia em um relacionamento.</Text>
                        <Text style={styles.txtparagraf}>Se você esta solteiro, a carta de tarot dos Amantes é um sinal de que o amor está entrando em sua vida. E pelo que parece, vem com muito romance, paixão e conexão espiritual. Você vai se sentir como se tivesse conhecido a alma gêmea que compartilha com você mais do que apenas a atração física.</Text>
                        <Text style={styles.txtparagraf}>Como os Amantes também simboliza escolha e compromisso, ele também pode propor o quão comprometido você está com seu relacionamento. Você prioriza outros elementos de sua vida em vez disso?</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Com relação a dinheiro e leituras de carreira, a carta de tarot dos Amantes frequentemente sugere oportunidades de cooperação ou grandes decisões que você precisa tomar. Você pode estar em uma encruzilhada ou mudando de um caminho para outro, ou pode precisar fazer escolhas entre seu trabalho e outros aspectos de sua vida.</Text>
                        <Text style={styles.txtparagraf}>Os Amantes é um sinal de boas-vindas para uma parceria de negócios ou uma oportunidade de trabalho conjunto com alguém. Esse relacionamento pode beneficiar vocês dois e abrir novas oportunidades no futuro. Os Amantes também podem indicar que um relacionamento no trabalho pode se transformar em algo mais do que platônico. Se este parecer ser o caso, entenda no que você está se metendo. Relacionamentos de trabalho se tornando românticos podem complicar as coisas.</Text>
                        <Text style={styles.txtparagraf}>Quando se trata de dinheiro, a carta dos Amantes implica que algumas decisões econômicas significativas precisam ser tomadas. Pode ser necessário escolher entre duas despesas significativas que têm um impacto mais amplo em sua situação financeira. Depende da sua situação, mas pode ser algo como escolher entre comprar uma viagem de férias no exterior ou comprar um carro novo.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Os Amantes da leitura sobre saúde indicam que os relacionamentos e as conexões pessoais constituem uma parte essencial do seu bem-estar. Também pode significar que você se depara com decisões relacionadas à sua saúde ou possivelmente até mesmo ao tratamento. Talvez você esteja diante de uma decisão sobre escolhas de estilo de vida que têm um impacto profundo em sua saúde.</Text>
                        <Text style={styles.txtparagraf}>Em um contexto espiritual, a carta de tarot Amantes é um sinal de equilíbrio e harmonia. Você encontrará um senso de equilíbrio ao obter uma percepção mais ampla de si mesmo. Você está chegando a um acordo com quem você é e quais são os seus desejos na vida. Essa percepção o leva mais perto de compreender seu caminho espiritual. Os Amantes também podem sugerir que você encontrará uma amizade com a qual compartilhar sua jornada espiritual.</Text>

            <Text style={styles.txtH2}>Os Amantes Sim ou Não</Text>
                <Text style={styles.txtparagraf}>Em perguntas que podem resultar em sim ou não, os Amantes é uma carta muito positiva, principalmente em questionamentos relacionados ao amor e aos relacionamentos. Se a carta estiver a relacionada a perguntas sobre outras áreas de sua vida, é um talvez.</Text>
            
            <Text style={styles.txtH2}>Os Amantes significado invertido</Text>
                <Text style={styles.txtparagraf}>Os Amantes invertido podem ser um sinal de desafios, principalmente com aqueles que estão perto de você. Alguns de seus relacionamentos próximos podem ser estressantes e a comunicação neles desafiadora. Os Amantes invertido também podem ser um sinal de temor de compromisso ou de não assumir a responsabilidade por suas escolhas.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>A carta dos Amantes invertido em um relacionamento ou leitura de amor sugere que frieza e desarmonia entraram em um de seus relacionamentos. Alguns problemas estão causando atrito em você e devem ser resolvidos para restaurar o equilíbrio. Suponha que você esteja considerando terminar ou continuar o relacionamento. Nesse caso, a carta Os Amantes o lembra de evitar escolhas impensadas e avaliar cuidadosamente os pontos positivos e negativos. Você pode perceber que os aspectos positivos superam os negativos, e vale a pena lutar pelo seu relacionamento. Como alternativa, você pode descobrir que é hora de seguir em frente.</Text>
                        <Text style={styles.txtparagraf}>Se você for solteiro, os Amantes invertido pode indicar que você teme se comprometer ou que suas expectativas estão erradas. Você pode sentir que não está encontrando ninguém que compartilhe os mesmos valores. Faça uma introspecção honesta sobre seus medos, desejos e expectativas. Isso pode desbloquear suas dificuldades em se comprometer com alguém.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Os Amantes invertido é um presságio de problemas no local de trabalho. Pode ser uma indicação de conflitos entre colegas ou parceiros de negócios. Você pode precisar gastar energia extra em problemas de comunicação e fazer com que todos concordem sobre as questões. Ou pode haver uma pessoa que parece estar evitando responsabilidades e trabalho, enquanto outras precisam carregar seu peso.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, os Amantes invertido não é um grande presságio. Isso pode implicar em desequilíbrios com os gastos e o dinheiro que entra. Ou que você tem feito escolhas que podem colocar em risco sua segurança financeira. Os Amantes invertido lembra você de sempre entender as implicações de suas decisões financeiras e o que você pode realmente pagar.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>A carta invertida do tarot os Amantes indica que você não está em harmonia com seus sentimentos físicos. Você precisa respeitar seus níveis de energia e ouvir como seu corpo se sente. Você pode estar pressionando demais com sua rotina de exercícios e preparação física. Às vezes, você precisa diminuir a velocidade para restaurar a energia para que possa voltar aos trilhos.</Text>
                        <Text style={styles.txtparagraf}>Em relação à espiritualidade, os Amantes invertido pode indicar que você tem se distanciado de seu caminho espiritual. Você pode estar se concentrando em objetivos materialistas e esperando que eles tragam satisfação para sua vida, o que o deixou com uma sensação de vazio. Lembre-se de nutrir também o seu lado espiritual. Permita que preencha o vazio e restaure a harmonia.</Text>

            <Text style={styles.txtH2}>Combinações Os Amantes</Text>
                <Text style={styles.txtparagraf}>Os Amantes nos encoraja a seguir nossos corações e adiciona um aspecto de união quando combinada com outras cartas de tarot.</Text>
                    <Text style={styles.txtH3}>Os Amantes e O Louco</Text>
                        <Text style={styles.txtparagraf}>O Louco é a carta de alegria e de novos começos. Quando combinado com os Amantes, um novo amor está no ar, e a combinação convida você a aceitar essa aventura. Talvez também possa significar que o outro parceiro nesta união não leva o relacionamento a sério.</Text>
                    <Text style={styles.txtH3}>Os Amantes e A Força</Text>
                        <Text style={styles.txtparagraf}>A Força é um presságio de triunfo quando nos deparamos com situações difíceis. Quando combinados com os Amantes que predizem decisões cruciais, podemos ler isso como uma mensagem encorajadora sobre nossa escolha. Se confiarmos em nosso coração e tomarmos a decisão, triunfaremos.</Text>
                    <Text style={styles.txtH3}>Os Amantes e A Temprança</Text>
                        <Text style={styles.txtparagraf}>A Temperança nos lembra que devemos buscar o equilíbrio e ser indulgentes com a moderação. Ver a combinação de Temperança e Amantes é um lembrete para não nos deixarmos levar por um único relacionamento. Não devemos concentrar toda a nossa energia em um só lugar e esquecer que também temos amigos, trabalho e interesses pessoais em nossas vidas.</Text>
                        <Text style={styles.txtH3}>Os Amantes e A Imperatriz</Text>
                            <Text style={styles.txtparagraf}>A Imperatriz é o arquétipo-mãe do baralho de tarot. Ela vem com carinho e amor. Quando combinado com os Amantes, é um sinal de uma bela união. Eu vejo isso como uma indicação de um relacionamento que pode durar e tem o potencial de ser “aquele”.</Text>
                        <Text style={styles.txtH3}>Os Amantes e A Morte</Text>
                            <Text style={styles.txtparagraf}>A combinação da Morte e dos Amantes pode ir de várias maneiras. A Morte sinalizando finais e mudanças, enquanto os Amantes sinalizando uniões e escolhas. Essa combinação é um presságio de mudança relacionada aos relacionamentos. Pode ser um final ou uma mudança na dinâmica do relacionamento. O que é reconfortante nessa combinação é que ela também exige um novo começo.</Text>

            <Text style={styles.txtH2}>Os Amantes como tipos de personalidade</Text>
                <Text style={styles.txtparagraf}>Os Amantes é uma pessoa facilmente confundida por escolhas. Enfrentar uma decisão os deixa perplexos. Frequentemente, são personalidades que decidem com o coração, e não com a mente. Eles são otimistas e despreocupados quando não se deparam com escolhas. Você se sente caloroso quando está perto de uma pessoa com personalidade de Os Amantes. Se você está em um relacionamento com eles, eles são apaixonados, sensuais e românticos.</Text>

            <Text style={styles.txtH2}>Os Amantes como sentimentos</Text>
                <Text style={styles.txtparagraf}>Suponha que você esteja se perguntando como alguém se sente por você e os Amantes aparecem. Nesse caso, você está com sorte. Os Amantes é uma carta muito positiva quando se trata de sentimentos. É a carta da alma gêmea e, portanto, é um sinal de que vocês compartilham uma conexão profunda um com o outro. Você se alinha com seus desejos e valores e é uma grande combinação física, emocional e espiritual.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot Os Amantes</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot Os Amantes?</Text>
                    <Text style={styles.txtparagraf}>A carta dos Amantes simboliza a harmonia, perfeição, atração e amor. Você encontrou o equilíbrio dentro de você e aprendeu a ouvir sua voz interior, compreendendo aquilo que o motiva e o que realmente deseja para si, e isso o ajuda muito a transpassar qualquer obstáculo que surja em seu caminho. Você está pronto para fazer as escolhas importantes que o universo tem a lhe impor e, mesmo que se encontre preocupado e aflito sobre qual caminho tomar, saberá o que é melhor para você, basta confiar em si mesmo e analisar todos os fatos antes de dar o primeiro passo. Não tenha medo de pegar o caminho mais turvo, às vezes é preciso sair da calmaria e da zona de conforto para amadurecer e crescer como pessoa, apenas tenha certeza de que conhece todos os lados dessa estrada.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot Os Amantes invertido?</Text>
                        <Text style={styles.txtparagraf}>Quando na posição invertida, a carta dos Amantes mostra a força de um arrependimento por uma escolha mal feita. Você decidiu trilhar um caminho em particular e esta escolha agora começa a pesar, pois sente que não tem forças ou capacidade para continuar em frente. Por conta disso, você culpa tudo e todos pelos males que lhe atingem e não consegue enxergar que foi você quem optou qual estrada tomaria. Mesmo que tenha dado ouvidos a terceiros, foi você quem deu a última palavra e precisa compreender imediatamente isso. Ao invés de ficar se lamentando, canalize toda esta energia para sair da situação em que se encontra. Aprender com seus erros evitará que caia novamente na própria armadilha.</Text>
                <Text style={styles.txtH3}>O que a carta de tarot Os Amantes significa em uma leitura de amor? </Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, a chama do amor encontra-se novamente acesa. Caso tenham passado por momentos turbulentos, discussões e enfrentado problemas, saiba que isso tudo ajudou a unir vocês e fortalecê-los ainda mais. O amadurecimento da relação é visível e se deu graças ao vínculo intenso e profundo que existe entre vocês. Vocês possuem uma forte conexão e nada é capaz de abalar o que foi construído por vocês até aqui. Se solteiro, você está prestes a encontrar o amor novamente e ele será duradouro e intenso com uma conexão incrível e, talvez, nunca vivida por você.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, mostra que um de vocês está mais dedicado ao relacionamento do que o outro, o que acaba trazendo desequilíbrio e desânimo para quem se entrega tanto e não recebe esse retorno do parceiro. É preciso trabalhar as emoções e as dúvidas que são tão naturais quando se está construindo o futuro ao lado de alguém. Tentar se reconectar e superar os medos e a falta de confiança que possui em relação ao outro servirá para conseguirem superar qualquer desafio. Se solteiro, você terá que esperar um pouco mais para finalmente encontrar o amor. Mesmo que esteja se envolvendo com pretendentes, é preciso que todas as áreas e sentimentos de vocês estejam conectados entre si, para só então ter certeza de que a relação será duradoura.</Text>
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
        marginLeft: 15,
        marginRight:15,
        fontSize:18
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
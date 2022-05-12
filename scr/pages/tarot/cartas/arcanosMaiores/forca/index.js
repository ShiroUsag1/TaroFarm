import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Strength() {

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
            <Text style={styles.txtH1}>A Força</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-11.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave A Força</Text>
                <Text style={styles.txtparagraf}>Palavras-chave são uma excelente ajuda para memorizar os significados das cartas de tarot, então vamos examiná-las aqui.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: força interna, coragem, persuasão, resistência, compaixão, sensualidade</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: falta de autocontrole, autodúvida, baixa energia, emoção bruta</Text>
                <Text style={styles.txtparagraf}>Agora que os elementos visuais e palavras-chave da Força foram explicados, vamos avançar em seus significados mais profundos em amor, relacionamentos, carreira, dinheiro, saúde e espiritualidade.</Text>

            <Text style={styles.txtH2}>A Força significado</Text>
                <Text style={styles.txtparagraf}>A carta de tarot da Força representa força, paixão, persuasão e compaixão. Isso o lembra de que sua força interna pode superar qualquer obstáculo que você encontrar. Você tem o poder de manter a compostura e pensar com clareza, mesmo em situações em que sua coragem está sendo testada. Também nos lembra que paciência, sabedoria e compreensão funcionam muito melhor no gerenciamento de problemas do que impor sua vontade com força.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>A carta do tarot Força nas leituras de amor e relacionamento representa sua capacidade de aceitar os outros como eles são, ter paciência e demonstrar a força do amor.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento, a força pode simbolizar sua forte conexão com seu parceiro. Seu relacionamento está em equilíbrio, mental e fisicamente, e há muita compaixão e amor. Vocês se entendem e podem resolver seus problemas com paciência e comunicação clara.</Text>
                        <Text style={styles.txtparagraf}>Se você esta solteiro, está brilhando com confiança e coragem, o que o atrairá aos olhos dos outros. Força é um presságio muito positivo para conhecer alguém novo. Eles podem até ser um pouco selvagens, o que exigirá algumas habilidades sofisticadas de você para domar o animal por dentro.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>A Força nas leituras financeiras ou relacionadas ao trabalho representa a chave para o sucesso. Você precisará de confiança, paciência e força interna para transformar seus sonhos em realidade.</Text>
                        <Text style={styles.txtparagraf}>Em relação à sua carreira, a Força lembra que você pode superar qualquer obstáculo usando sua força interna. Você já tem o talento, o potencial e a habilidade. Ainda assim, você precisará de um pouco de coragem e persuasão para demonstrá-los a outras pessoas. Controle suas emoções e não deixe a frustração aparecer se você não for notado imediatamente. Seja paciente com os resultados.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, a Força te lembra de controlar suas emoções. Não faça um investimento ou decisão de compra baseado em entusiasmo. Use sua sabedoria para calcular o que é sensato neste momento.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>A carta da Força representa a mente controlando suas emoções. Ela o chama para conter a reação emocional que surge dos impulsos animais. Esteja no controle de seus desejos e faça com que sua mente o empurre para frente em seus objetivos de saúde. Criar hábitos saudáveis ​​geralmente requer controle da mente. Se você tem dificuldade em seguir uma dieta nutritiva, ou se prefere ficar no sofá, doma o animal preguiçoso que está dentro e se esforce.</Text>
                        <Text style={styles.txtparagraf}>Espiritualidade a Força representa uma conexão crescente com o poder superior. A lemniscata acima de sua cabeça simboliza sabedoria e poderes espirituais. Sua conexão espiritual alimenta sua força interna. Portanto, use esta conexão para o seu bem. Deixe-o lhe fornecer energia para resistir e superar quaisquer obstáculos e desafios em seu caminho.</Text>

            <Text style={styles.txtH2}>A Força significado invertido</Text>
                <Text style={styles.txtparagraf}>A carta do tarot Força invertida representa dúvida, falta de energia e falta de autocontrole. Isso indica que você precisa recuperar sua autoconfiança e aprender a canalizar emoções cruas e instintos primitivos. Deixá-los vagar livremente pode resultar em um comportamento que o deixa na sombra dos outros, lamentando suas reações ou não realizando as coisas que deseja.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>A Força revertida no amor e nos relacionamentos pode indicar problemas de auto-estima ou que as emoções estão dominando você.</Text>
                        <Text style={styles.txtparagraf}>Para aqueles que estão em um relacionamento, a força invertida pode significar problemas de auto-estima que resultam em co-dependência. Isso pode impedir que você e seu parceiro sejam mais autossuficientes e busquem seus próprios interesses. Viver em um relacionamento não deve tirar a individualidade. Confiança e conversas abertas sobre seus desejos levarão a uma melhor compreensão e uma conexão mais profunda. Uma carta de Força invertida também pode indicar comportamento autoritário em vez de compassivo. Certifique-se de que esse comportamento não seja semeado em seu relacionamento e altere a harmonia e o equilíbrio.</Text>
                        <Text style={styles.txtparagraf}>Para aqueles que estão solteiros, a carta do tarot com força invertida pode indicar que a confiança é necessária em sua vida amorosa. A falta de confiança pode estar fazendo você escolher o tipo errado de parceiro ou impedindo-o de conhecer alguém novo. Não se deixe levar pela autocomiseração ou por vozes negativas dentro de sua cabeça dizerem que você não merece coisa melhor. Encontre maneiras de recuperar a confiança e deixe o mundo ver como você é linda.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>A carta de Força invertida sugere que você tem as habilidades e ideias para ter sucesso, mas falta autoconfiança e fé. A dúvida está impedindo você de alcançar seus objetivos profissionais. Acredite em si mesmo e em suas habilidades, apresente-se com confiança, e os outros começarão a vê-lo sob a mesma luz.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, a carta invertida do tarot Força diz para você retirar gastos desnecessários. Existe o perigo de você permitir que as emoções influenciem demais a sua tomada de decisão. As escolhas impulsivas no momento podem prejudicar sua situação econômica mais do que o normal. A força invertida também pode indicar incerteza financeira, portanto, certifique-se de estar pronto para o inesperado.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Em relação à saúde, Força invertida está sinalizando falta de autocontrole, o que pode ser alimentar maus hábitos. Eles naturalmente prejudicam sua saúde a longo prazo. Tente se lembrar do autocontrole e da substituição de seus maus hábitos por hábitos saudáveis. Em vez de passar horas em mídias sociais com Instagram, dê um passeio lá fora ou leia um livro que ensina algo novo. Opte por beber água em vez de bebidas açucaradas para combater a sede, e assim por diante.</Text>
                        <Text style={styles.txtparagraf}>Espiritualmente, a Força invertida é um indicador de que a dúvida o impede de obter o melhor de sua conexão espiritual no momento. Faça coisas de que goste para aumentar sua autoconfiança. Passe algum tempo com seus amigos e compartilhe seus caminhos espirituais juntos. Isso pode ter um efeito positivo no seu bem-estar geral, tanto física quanto espiritualmente.</Text>

            <Text style={styles.txtH2}>A Força Sim ou Não</Text>
                <Text style={styles.txtparagraf}>A Força é uma indicação de que força e controle internos são necessários em relação aos seus desafios. Tendo isso em mente em perguntas que podem resultar em uma resposta sim ou não, a resposta que você procura é provavelmente um “Sim”.</Text>

            <Text style={styles.txtH2}>Combinações A Força</Text>
                <Text style={styles.txtparagraf}>A Força nos incentiva a usar nossa confiança, generosidade, persuasão e capacidade de resistir à pressão. Isso nos dá controle sobre a situação com a qual estamos lidando. Vamos dar uma olhada aqui no que significa quando combinado com diferentes cartas de tarot.</Text>
                    <Text style={styles.txtH3}>A Força e Os Amantes</Text>
                        <Text style={styles.txtparagraf}>Ter a combinação dos Amantes e da Força em sua tiragem no tarot é uma ótima combinação, especialmente quando se busca perguntas nos relacionamentos. Os Amantes é um sinal de que você se depara com decisões significativas ou vê desenvolvimentos positivos no assunto em questão. A Força o lembra de controlar suas emoções ao tomar essas decisões ou manter a calma com os resultados que vê.</Text>
                    <Text style={styles.txtH3}>A Força e O Louco</Text>
                        <Text style={styles.txtparagraf}>O Louco é uma carta de possibilidades e alegria, e a Força, uma carta de autocontrole. Esta é uma combinação muito equilibrada. Você enfrenta uma aventura como nenhuma outra, e autocontrole e força mental são necessários nessa jornada.</Text>
                    <Text style={styles.txtH3}>A Força e O Sol</Text>
                        <Text style={styles.txtparagraf}>O Sol brilha sobre nós com vitalidade, consciência e potencial. Chama-nos a nos expressarmos e nos abraçarmos como somos. Ver o Sol com a Força é uma combinação para abraçar nossa beleza interior e aproveitar a vida, mas um lembrete para manter o controle de nosso ego e impulsos.</Text>
                    <Text style={styles.txtH3}>A Força e A Imperatriz</Text>
                        <Text style={styles.txtparagraf}>A Imperatriz nos encoraja a entrar em contato com o nosso amor feminino e alimentar o nosso amor sobre o assunto em questão. A Força também retrata uma mulher que está no controle. Ela controla a situação com compaixão e não com força física. Esta combinação está dizendo que o poder feminino é necessário na questão em questão. Talvez haja uma necessidade de sedução para persuadir o caminho através disso.</Text>
                    <Text style={styles.txtH3}>A Força e O Carro</Text>
                        <Text style={styles.txtparagraf}>O Carro nos encoraja a acreditar em nós mesmos, definir nossos propósitos e agir. Ele carrega uma mensagem muito semelhante à da Força, mas a força destaca poderosamente a importância do poder interior. Ter esses dois em uma leitura lado a lado é uma mensagem clara de que força interna e potência externa são necessárias nos desafios atuais.</Text>

            <Text style={styles.txtH2}>A Força como tipo de personalidade</Text>
                <Text style={styles.txtparagraf}>Pessoas com personalidade forte são indivíduos pacientes, que tendem a realizar qualquer coisa que eles pretendam. Sua resiliência e destemor ajudam muito em sua vida. Eles não têm medo de falar e assumir o controle das situações. Eles são mestres em persuadir e motivar os outros, então provavelmente você verá essas personalidades em posições de liderança.</Text>

            <Text style={styles.txtH2}>A Força como Sentimentos</Text>
                <Text style={styles.txtparagraf}>Suponha que você esteja se perguntando o que alguém sente por você e a carta do tarot da Força apareça. É um sinal muito positivo que essa pessoa tenha sentimentos por você. No entanto, essa pessoa é mestre em controlar suas emoções para levar algum tempo antes de virem lhe dizer isso.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot A Força</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot A Força?</Text>
                    <Text style={styles.txtparagraf}>A Força mostra que você conseguiu aprender a como dominar seus medos e anseios. Você está em um momento de sua vida em que se sente mais confiante sobre as próprias habilidades e possui a coragem necessária para arriscar e seguir em frente, pronto para enfrentar qualquer desafio ou intempérie que surja em seu caminho. Talvez, ainda leve um tempo para que você consiga estabilizar completamente todas as suas emoções e eis aqui o seu maior desafio, superar os bloqueios que você mesmo criou para si. Porém, você já conquistou muito nesse sentido e, se continuar com a força de vontade e a determinação que já apresenta, não irá demorar até que consiga agir de forma mais racional e confiante. Lembre-se de sempre manter a calma.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot A Força invertido?</Text>
                        <Text style={styles.txtparagraf}>Quando na posição invertida, a Força indica que você perdeu o controle sobre os próprios sentimentos, se deixando dominar por um medo irracional de que as coisas não darão certo ou de que não é capaz de enfrentar os problemas que aparecem para você. Pode ser que pessoas de seu convívio o estejam contaminando, convencendo-o de que suas habilidades não são suficientes para alcançar seus objetivos e não possui potencial para grandes conquistas. Seja como for, se auto sabotar por conta de pensamentos ou ouvindo os outros só servirá para atrasar seu crescimento e impedir que seja bem sucedido em sua caminhada. Acredite, você possui força e confiança dentro de você, basta descobrir e colocar em suas ações.</Text>
                <Text style={styles.txtH3}>O que a carta de tarot A Força significa em uma leitura de amor? </Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, a carta da Força mostra que vocês possuem uma base estável construída com muito amor e dedicação. Apesar de serem muito unidos e próximos, a relação pode sofrer pequenos abalos por conta de explosões emocionais ocasionadas por diferenças de opiniões entre vocês. Nestes momentos é de suma importância manter a calma e tentar conversar com seu parceiro com respeito e honestidade sem se deixarem levar pelo calor do momento. Se é solteiro, você se sente muito confiante e isso o ajudará a conhecer novas pessoas e embarcar em relações intensas e interessantes. É provável que um relacionamento sério desponte neste meio tempo com alguém de personalidade forte e marcante.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, indica um relacionamento que caminha para a toxicidade da codependência em relação ao outro. Muitos motivos podem ter levado vocês a chegar até este ponto, o importante é começar a trabalhar as próprias emoções e agir de forma a não sufocar os próprios desejos por medo de desagradar o parceiro. A independência é importante para não esquecer quem se é e o que te faz feliz, por isso não se deve sufocar a autonomia de cada um dentro da relação. Se solteiro, você pode estar enfrentando problemas de baixa autoestima ou estar sendo muito impulsivo em suas escolhas, o que o está levando a se envolver com parceiros errados que não acrescentam nada em sua vida e só tendem a te deixar mal. Você precisa acreditar mais em si mesmo e perceber que merece o melhor no amor.</Text>
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
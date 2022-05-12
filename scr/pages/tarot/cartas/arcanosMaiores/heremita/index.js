import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Hermit() {

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
            <Text style={styles.txtH1}>O Eremita</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-09.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave O Eremita</Text>
                <Text style={styles.txtparagraf}>Palavras-chave são resumos dos significados das cartas de tarot e excelentes maneiras de memorizá-los. Então, vamos dar uma olhada neles aqui.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave : Introspecção, estar sozinho, meditação</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: Isolamento, solidão, retraimento</Text>

            <Text style={styles.txtH2}>O Eremita significado</Text>
                <Text style={styles.txtparagraf}>Agora que examinamos os componentes visuais e as palavras-chave do Eremita, vamos avançar em seus significados mais profundos em amor, relacionamentos, carreira, dinheiro, saúde e espiritualidade.</Text>
                <Text style={styles.txtparagraf}>A carta de tarot Eremita apresenta que você está precisando fazer uma pausa para contemplar. As questões externas distraem seu pensamento interior, então você precisa direcionar seus pensamentos para dentro e encontrar sua sabedoria interior para orientação. Nesses momentos de paz e tranquilidade, você terá uma compreensão mais profunda de quem você é e do que deseja.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>Nas leituras de amor e relacionamento, o Eremita, à primeira vista, não é a carta mais surpreendente de se obter. Um homem velho solitário não parece o presságio mais favorável para o amor, mas isso não significa que esta carta seja totalmente inútil para lhe dar conselhos sobre amor e relacionamentos.</Text>
                        <Text style={styles.txtparagraf}>Para os solteiros, a carta do tarot do Eremita significa que você está passando por um momento de solidão, necessário para superar seu relacionamento anterior. Também pode ser um sinal de que, em vez de procurar o amor, você deve se concentrar em si mesmo no momento. Faça um exame de consciência do que você está procurando e por quê?</Text>
                        <Text style={styles.txtparagraf}>Para aqueles que estão em um relacionamento, o Eremita pode sugerir que agora pode ser o momento de concentrar mais energia em si mesmo. Talvez você tenha negligenciado o tempo consigo mesmo e focado sua atenção nas necessidades do seu relacionamento. Quando você tem uma conexão equilibrada consigo mesmo, também será capaz de colocar mais energia em seu relacionamento.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Quando o Eremita aparece na leitura de dinheiro e carreira, isso sugere que agora é o momento de reunir seus pensamentos sobre seus objetivos financeiros e profissionais.</Text>
                        <Text style={styles.txtparagraf}>Em relação à sua carreira, o Eremita pode ser um sinal de que você está levando sua aspiração profissional à frente de tudo. Você não deve ficar preso apenas em seu caminho profissional, mas encontre o equilíbrio e reserve um tempo para outras áreas de sua vida também. O Eremita também pode sinalizar que você não está totalmente satisfeito com o rumo que sua carreira profissional está tomando no momento. Você deve fazer um exame de consciência e descobrir o que realmente deseja. Você quer fazer um trabalho que satisfaça seus desejos materialistas ou quer fazer algo que também alimente seu espírito?</Text>
                        <Text style={styles.txtparagraf}>Quanto ao dinheiro, o Eremita é um homem simples e minimalista. Agora não é hora para compras chamativas. Agora é a hora de olhar para seus valores e deixar os gastos de lado por um tempo. Concentre sua atenção em compreender seus objetivos financeiros e como deseja alcançá-los</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>O Eremita é uma carta espiritual. Ele o convida a praticar meditação de vez em quando. Permitir que sua sabedoria interior fale o ajudará a ouvir as respostas de que precisa. Deixe que esta experiência espiritual lhe dê orientação para seus próximos passos.</Text>
                        <Text style={styles.txtparagraf}>Retirar-se para contemplar diferentes áreas de sua vida é um sacramento espiritual em si. Isso melhorará seu bem-estar tanto físico quanto espiritualmente.</Text>

            <Text style={styles.txtH2}>O Eremita significado invertido</Text>
                <Text style={styles.txtparagraf}>Quando a carta do tarot do Eremita sai invertida, representa os lados prejudiciais de se isolar dos outros. O Eremita invertido pode ser um sinal de que você está levando seu auto-isolamento longe demais e se tornando literalmente um Eremita. Reservar um tempo para si mesmo é essencial e útil, mas afastar-se inteiramente das pessoas ao seu redor causará mais danos do que benefícios.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamentos</Text>
                        <Text style={styles.txtparagraf}>Na leitura de amor e relacionamento, o Eremita invertido é uma indicação de que alguém se sente isolado no relacionamento. Você ou seu parceiro podem se sentir desconectados ou rejeitados um pelo outro. Talvez o trabalho ou alguma outra atividade tire a atenção do outro, ou alguns sentimentos não estão sendo atendidos. Seja o que for, o Eremita invertido pede uma reconexão e fala abertamente sobre como vocês dois vivenciam a situação.</Text>
                        <Text style={styles.txtparagraf}>Para os solteiros, se você recentemente sentiu dor no coração e se separou, o Eremita invertido pode indicar que você tem um forte desejo de se reconectar com seu parceiro anterior. Mas se você esta sozinho algum tempo, o Eremita invertido é um sinal de que você passou muito tempo pensando no fim de relacionamentos anteriores. Agora é o momento de deixar o passado para trás e encontrar algo novo em sua vida. Mas fique disponível novamente e esteja pronto para receber amor.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Eremita invertido em dinheiro e carreira é uma sugestão para se reconectar com outras pessoas. Ele o incentiva a buscar a orientação de pessoas mais experientes, tanto em questões financeiras quanto relacionadas à carreira.</Text>
                        <Text style={styles.txtparagraf}>Em relação à sua carreira, o Eremita invertido sugere que agora é um excelente momento para sair do isolamento e focar na construção de relacionamentos profissionais. Ele o incentiva a encontrar atribuições de trabalho onde você tenha a oportunidade de interagir e obter experiência valiosa de outras pessoas. Agora não é hora de trabalhar sozinho.</Text>
                        <Text style={styles.txtparagraf}>Com relação ao dinheiro, o Eremita invertido pode ser uma indicação de que você tem sido muito mesquinho com o dinheiro. Na medida em que você não está se permitindo desfrutar nem mesmo de pequenas guloseimas. É bom ser conservador com os gastos, mas você não quer sair tão barato. O Eremita invertido também pede cautela quando se trata de investimentos. Ele o aconselha a buscar orientação de fontes confiáveis.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>O Eremita invertido no contexto da saúde pode indicar que você se beneficiará por conhecer outras pessoas no momento. As amizades são uma parte essencial do nosso bem-estar, portanto, valorize-as e alimente-as. Também pode indicar que você está sobrecarregado com problemas em algumas áreas de sua vida, o que tem causado estresse extra. Nesse caso, o Eremita invertido chama você para descansar um pouco.</Text>
                        <Text style={styles.txtparagraf}>Em um significado espiritual, o Eremita invertido, inverteu as ligações para entrar em contato com pessoas que pensavam da mesma forma. Essas novas conexões seriam benéficas para o seu crescimento espiritual. Grupos de encontros do Facebook são ótimos lugares para procurar pessoas com interesses semelhantes.</Text>


            <Text style={styles.txtH2}>O Eremita Sim ou Não</Text>
                <Text style={styles.txtparagraf}>Em perguntas que podem resultar em uma resposta sim ou não, o Eremita é uma carta relativamente neutra. Chama você prestar atenção para dentro de si para buscar respostas. Portanto, se a carta estiver na vertical, é um Talvez.</Text>

            
            <Text style={styles.txtH2}>Combinações O Eremita</Text>
                <Text style={styles.txtparagraf}>Combinar o Eremita com outras cartas do tarot apóia a necessidade de reflexão interior, o que o ajudará a compreender e descobrir sua sabedoria interna.</Text>
                    <Text style={styles.txtH3}>O Eremita e A Estrela</Text>
                        <Text style={styles.txtparagraf}>A Estrela é a carta de esperança, inspiração e oportunidades. Quando combinado com o Eremita, há uma sensação de ideia ou esperança de que um momento passado na solidão pode resultar. Vejo isso como uma promessa de que a inspiração exigirá alguma reflexão agora.</Text>
                    <Text style={styles.txtH3}>O Eremita e A Morte</Text>
                        <Text style={styles.txtparagraf}>Quando o Eremita e a Morte aparecem juntos, é um sinal de que o final do ciclo que você estava vivendo lhe causou dor. Na medida em que você está atraindo para si mesmo. Essa é uma parte necessária do processo de cura e o ponto de partida para algo novo. Lembre-se de não insistir muito na perda e voltar para a companhia de outras pessoas quando sentir que está pronto.</Text>
                    <Text style={styles.txtH3}>O Eremita e A Justiça</Text>
                        <Text style={styles.txtparagraf}>A combinação das cartas de tarot Justiça e Eremita mostra as circunstâncias necessárias para se chegar a uma decisão justa. A Justiça também é uma carta de equilíbrio, então essa combinação pode estar apontando para o fato de que você precisará tirar um tempo espiritual para restaurar o equilíbrio em sua vida.</Text>
                    <Text style={styles.txtH3}>O Eremita e A Força</Text>
                        <Text style={styles.txtparagraf}>A Força prevê uma resolução bem-sucedida para um problema significativo. Para encontrar a solução, o Eremita sugere recorrer ao seu conhecimento interior. Você precisará passar algum tempo sozinho para descobrir a solução do problema.</Text>
                    <Text style={styles.txtH3}>O Eremita e O Jugamento</Text>
                        <Text style={styles.txtparagraf}>Ver o Julgamento em uma tiragem de tarot é um sinal de que um período está chegando ao fim em nossas vidas. Ter o Eremita combinado com isso significa que o período se transformará em um tempo de solidão. Você terá a chance de organizar seus pensamentos e se preparar para um novo começo.</Text>

            <Text style={styles.txtH2}>O Eremita como tipos de personalidade</Text>
            <Text style={styles.txtparagraf}>O Eremita representa a personalidade de um introvertido que é educado, sábio e inspirador. Ele é do tipo que pode explicar coisas espirituais e complexas. Você pode ouvi-los falando sobre os mistérios do universo por horas. A personalidade do Eremita vai bem para um terapeuta, psicólogo ou mentor espiritual.</Text>

            <Text style={styles.txtH2}>O Eremita como sentimentos</Text>
                <Text style={styles.txtparagraf}>Questionando o tarot sobre como alguém se sente sobre você, e a carta do tarot Eremita aparece. Nesse caso, você está com falta de sorte neste momento. O Eremita não é uma pessoa que mostra seus sentimentos ou os compartilha com alguém. Eles preferem a solidão a relacionamentos. Não significa que você não poderia ter um relacionamento com uma pessoa assim. Só pode exigir compreensão extra e paciência de sua parte.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot O Eremita</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Eremita?</Text>
                    <Text style={styles.txtparagraf}>O Eremita é uma carta que simboliza a busca pelo conhecimento e voz interior. Ele aparece no jogo para chamar a uma reflexão sobre si mesmo e se desconectar um pouco do mundo lá fora. Você está embarcando em um momento onde sua alma grita para ser ouvida e será necessário tirar um tempo sozinho para não acabar sufocando de exaustão com questões mundanas que não param de cair sobre seu colo. É preciso se recuperar das feridas ocasionadas por situações difíceis que passou e conseguir resgatar a força e energias perdidas ao longo do caminho para conseguir seguir em frente. Sem este tempo consigo mesmo, será difícil perseguir seus sonhos e alcançar seus objetivos, pois você se sentirá sem ânimo para isso.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Eremita invertido?</Text>
                        <Text style={styles.txtparagraf}>Quando na posição invertida, o Eremita alerta para o distanciamento excessivo do mundo exterior e do convívio com outras pessoas. Você tirou algum tempo para si mesmo, refletiu sobre as coisas que lhe incomodavam e isso foi muito benéfico, mas chegou o momento de voltar a encarar a vida de frente. Ficar excluído do contato com outras pessoas, por não querer interagir, só servirá para te colocar em uma linha perigosa entre reclusão saudável para autoconhecimento e princípios de transtornos mentais, como a depressão. É preciso chegar a um equilíbrio. Ter momentos sozinhos é importante, mas estar com pessoas que te querem bem pode te trazer muitas coisas boas. </Text>
                <Text style={styles.txtH3}>O que a carta de tarot O Eremita significa em uma leitura de amor?</Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, o Eremita traz a mensagem de que é preciso conhecer a si mesmo, suas necessidades, desejos e medos para, só então, proporcionar a felicidade alheia. Apesar de ser uma busca pelo conhecimento próprio, ele pode e deve ser feito em conjunto com seu parceiro. Isso irá fortalecer ainda mais a união de vocês e permitirá que vocês conheçam a essência e a alma do outro e não existe nada mais revigorante em uma relação do que poder estar aberto a quem se ama. Se estiver solteiro, você está pronto para um novo começo no amor. Você tirou o tempo necessário para se curar das feridas abertas em relacionamentos passados e isso o ajudou a estar mais forte, determinado e saber o que espera de um novo parceiro.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, você pode estar se sentindo excluído pelo seu parceiro em todas as questões que envolvem a relação de vocês. Sentir-se abandonado está abalando os alicerces construídos por vocês e desestruturando o seu emocional, prejudicando até mesmo outras áreas de sua vida. Por isso, você precisa se afastar da situação como um todo e começar a analisar os fatos, encarando os próprios desejos e expectativas que possui sobre esta relação. Conversar honestamente com seu parceiro e expor seus sentimentos é o primeiro passo para se reconectarem. Também será importante tirar um tempo para vocês dois juntos. Se perceber que não existem meios de mudar a situação, então, talvez, seja melhor encerrar este ciclo e começar um novo. Se solteiro, o momento é de deixar de lado os medos e se abrir para novos relacionamentos.</Text>
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
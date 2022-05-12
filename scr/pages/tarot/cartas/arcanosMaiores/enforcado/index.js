import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function HangedMan() {

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
            <Text style={styles.txtH1}>O Dependurado</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-12.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave O Enforcado</Text>
                <Text style={styles.txtparagraf}>Antes de continuarmos com os significados mais aprofundados do Enforcado amor, relacionamentos, carreira, dinheiro e muito mais, vamos dar uma olhada em suas palavras-chave.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: suspensão, desapego, novas perspectivas</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: Atrasos e estagnação, resistência à mudança, indecisão</Text>
                <Text style={styles.txtparagraf}>Agora que a descrições visuais e as palavras-chave estão claras, vamos avançar para os significados do Enforcado na vertical e invertido.</Text>

            <Text style={styles.txtH2}>O Enforcado significado</Text>
                <Text style={styles.txtparagraf}>O Enforcado na leitura do tarot representa fazer uma pausa, se render ao momento, se soltar e ganhar novas perspectivas. Sua aparência nos lembra que aceitação e abandono são essenciais no processo de seguir em frente.</Text>
                <Text style={styles.txtparagraf}>O Enforcado o chama para deixar para trás os velhos modelos de pensamento e padrões de comportamento que não o servem mais para que você possa ver o seu mundo de uma nova perspectiva. Na verdade, nos incentiva a fazer uma pausa para refletir antes de tomar decisões importantes, em vez de apressar as coisas. Isso levará a um resultado melhor. Isso nos permite incluir novas perspectivas e oportunidades que, de outra forma, permaneceriam invisíveis se não parássemos por um momento.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>Em geral, o Enforcado é sobre novas perspectivas, esperar o momento certo, ficar preso e, às vezes, desistir. Esteja você solteiro ou em um relacionamento, ver esta carta o encoraja a reservar um momento para refletir e obter novas perspectivas. Em vez de se obrigar a encontrar alguém ou impor seu relacionamento para passar para o próximo nível, agora é um excelente momento para fazer uma pausa e contemplar.</Text>
                        <Text style={styles.txtparagraf}>Para aqueles que estão em um relacionamento, também pode indicar que pode ser revigorante e benéfico para vocês dois fazerem uma pausa e refletir. O Enforcado exorta você a se controlar para não tirar conclusões precipitadas e permitir que um ao outro tenha tempo para contemplar. Por outro lado, se você está infeliz em seu relacionamento e a única opção que vê é encerrá-lo. Nesse caso, o Enforcado o lembra de que você é livre para tirar os pés do laço e ir embora.</Text>
                        <Text style={styles.txtparagraf}>Se acontecer de você estar solteiro, o Enforcado pode indicar que você deve se libertar de todas as situações, comportamentos e relacionamentos que alimentam a negatividade. Você pode estar agarrado ao seu ex, mesmo sabendo que o relacionamento não é o certo para você. O Enforcado o incentiva a abrir mão desses sentimentos por seu ex. O Enforcado também pode ser um sinal para abandonar as expectativas irrealistas que você pode ter de um parceiro ideal.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Em relação à sua carreira, o Enforcado pode indicar que você se sente inseguro sobre o que deveria estar fazendo. Parece que você está preso em uma posição e não consegue descobrir o próximo movimento. Se for esse o caso, o Enforcado sugere que você se entregue ao momento e faça uma pausa. Veja a situação com o tempo e diferentes perspectivas. Isso lhe dá a chance de reavaliar sua situação e para onde seu caminho atual está levando. Você pode descobrir novas oportunidades, que não conseguia ver antes.</Text>
                        <Text style={styles.txtparagraf}>Quando se trata de seu dinheiro, O Enforcado em pé pode sinalizar que uma mudança de perspectiva é necessária. Evite fazer grandes movimentações e promessas de dinheiro no momento. Isso significa não pedir dinheiro emprestado e fazer investimentos. Se tem havido algum estresse sobre questões financeiras, você pode descobrir que, no momento, uma pausa pode realmente lhe trazer uma nova maneira de ver as coisas.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Ao considerar as questões de saúde, o Enforcado incentiva a ver as questões de várias perspectivas. Em vez de definir suas metas de dieta com base em sua aparência, você pode tentar colocá-las no peso com o qual se sentir confortável. O Enforcado também pode sugerir uma pausa em suas rotinas de saúde. Às vezes, uma pequena pausa pode nos ajudar mais a longo prazo.</Text>
                        <Text style={styles.txtparagraf}>Em relação à espiritualidade, o Enforcado o aconselha a estar atento à sua atitude para consigo mesmo. Suponha que você esteja lutando contra visões cínicas. Pode influenciar a maneira como você percebe sua vida e espiritualidade em geral. Tente se libertar dessas visões e padrões de pensamento prejudiciais. Se você os deixar ir, ficará muito melhor.</Text>

            <Text style={styles.txtH2}>O Enforcado significado invertido</Text>
                <Text style={styles.txtparagraf}>O significado inverso da carta de tarot do Enforcado representa um sentimento de estagnação em sua vida. Mesmo que você invista uma quantidade significativa de tempo em algo, pode parecer que não há progresso real. Isso pode fazer com que você se sinta frustrado e não acredite no futuro.</Text>
                <Text style={styles.txtparagraf}>Também pode significar que você reconhece a necessidade de fazer uma pausa, mas está lutando contra isso por algum motivo. Isso está fazendo com que você cometa os mesmos erros repetidamente. Só depois de parar e avaliar honestamente seu papel em suas falhas, você pode aprender com eles.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>Se você for solteiro, O Enforcado invertido pode indicar que o seu problema no momento é que você não aprendeu com seus relacionamentos anteriores. Você fica repetindo os mesmos modelos negativos de relacionamento e nunca pára para pensar sobre o seu papel nas falhas desses relacionamentos. Tente reservar um tempo para refletir sobre o que você precisa consertar para mudá-lo.</Text>
                        <Text style={styles.txtparagraf}>Para quem está em um relacionamento, o Enforcado invertido pode sugerir que suas expectativas e realidade não estão alinhadas no momento. Você deve abandonar sua afeição por como as coisas deveriam ser e abraçar o que você tem. Esteja no fluxo da vida, mesmo que não seja como você esperava. Os relacionamentos evoluem com o tempo, então o que é hoje pode ser outra coisa amanhã. Portanto, não apresse muito as coisas.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Enforcado revertido nas leituras de carreira pode sugerir que você está se sentindo preso em seu caminho profissional. O trabalho e o esforço que você investiu em sua carreira não renderam os dividendos com que sempre sonhou.</Text>
                        <Text style={styles.txtparagraf}>Pode ser que as horas extras que você trabalhou não estão sendo notadas, ou o treinamento que você fez não lhe rendeu uma promoção. É fácil começar a se sentir frustrado, mas não deixe que isso tire o melhor de você. Mantenha a consistência e o controle, e isso terá retorno no longo prazo.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, o Enforcado invertido pode significar que você tem inseguranças quanto à sua situação econômica. Isso pode estar impedindo você de tomar decisões financeiras benéficas. Tente consultar um especialista e obtenha novos insights e perspectivas dessa forma. Isso pode levá-lo a um caminho que renderá dividendos no longo prazo.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Em relação à saúde, o Enforcado invertido pode indicar que você está se sentindo frustrado com seus objetivos de saúde no momento. As várias dietas e rotinas de exercícios não estão funcionando como o esperado. Antes de se apressar em mudar para outro novo, pare um momento para realmente observar onde você está falhando. Você realmente esta consistente com o conselho que recebeu?</Text>
                        <Text style={styles.txtparagraf}>Com espiritualidade, O Enforcado invertido indica que você precisa fazer uma pausa. Se você sentir que perdeu o rumo da espiritualidade, faça uma pequena pausa para obter novas perspectivas. Lutar contra a desconexão não é útil no momento. Apenas deixe as coisas acontecerem e retorne quando estiver pronto com uma mente nova.</Text>

            <Text style={styles.txtH2}>O Enforcado Sim ou Não</Text>
                <Text style={styles.txtparagraf}>Suponha que você faça as perguntas do tarot que podem resultar em uma resposta Sim ou Não, e o Enforcado aparece. Nesse caso, a resposta que você está procurando é talvez.</Text>
                <Text style={styles.txtparagraf}>O Enforcado o aconselha a se entregar por um momento e deixar as coisas como estão. O momento da suspensão permitirá que você olhe para sua situação de uma nova perspectiva.</Text>

            <Text style={styles.txtH2}>Combinações O Enforcado</Text>
                <Text style={styles.txtparagraf}>O Enforcado em combinações de cartas de tarot aconselha a deixar as coisas como estão por um momento e ver a situação de um novo ponto de vista.</Text>
                    <Text style={styles.txtH3}>O Enforcado e A Imperatriz</Text>
                        <Text style={styles.txtparagraf}>O arquétipo da Imperatriz – mãe do baralho do tarot pode representar a centelha de uma ideia e estar aberto a mudanças. Combinar com o Enforcado pode indicar que algo está acontecendo, mas você precisa esperar o momento certo. O momento de pausa não é perdido, enquanto você tenta olhar para a ideia de mudança de diferentes perspectivas. Quando chegar o momento certo, você estará pronto.</Text>
                    <Text style={styles.txtH3}>O Enforcado e A Roda da Fortuna</Text>
                        <Text style={styles.txtparagraf}>A Roda da Fortuna é uma carta de tarot em constante mudança. Combiná-la com o Enforcado pode ser um chamado para uma pausa que você precisa ouvir. Em vez de ir de um lugar para outro, você precisa aproveitar o momento para refletir e estudar o que poderia fazer de diferente na próxima vez que a roda girar.</Text>
                    <Text style={styles.txtH3}>O Enforcado e O Imperador</Text>
                        <Text style={styles.txtparagraf}>O Imperador é o mais estável possível. Eles estão no controle de suas vidas, e ele estabelece suas regras e limites. Combinar o Imperador com o Enforcado pode indicar que você é muito rígido com seus modos. Reserve um momento para analisar seus padrões de uma nova perspectiva. Talvez você esteja dominando os outros ao seu redor, e o Enforcado sugere que você diminua um pouco o tom.</Text>
                    <Text style={styles.txtH3}>O Enforcado e Os Amantes</Text>
                        <Text style={styles.txtparagraf}>A carta de tarot os Amantes é uma carta de amor e decisões. Talvez algo precise ser sacrificado em nome de um novo amor. A combinação do Enforcado com os Amantes é uma indicação de que essa decisão não deve ser tomada levianamente. Portanto, é necessária uma pausa para contemplar.</Text>
                    <Text style={styles.txtH3}>O Enforcado e O Hierofante</Text>
                        <Text style={styles.txtparagraf}>Ambas cartas oferecem suporte à educação e ao ensino superior. O Hierofante mais ainda sobre buscar conselhos de uma fonte confiável. O Enforcado faz uma pausa para obter um insight. Talvez essa combinação sugira que é necessário um momento para obter as informações certas. Provavelmente, uma fonte confiável é o melhor lugar para começar.</Text>

            <Text style={styles.txtH2}>O Enforcado como tipos de Personalidade</Text>
                <Text style={styles.txtparagraf}>As personalidades do Enforcado são pessoas pacientes que conhecem a importância do sacrifício. A paciência chega a eles naturalmente, o que lhes permite ver todos os lados da questão. E o sacrifício é o caminho para a iluminação. Seja em posição de suspensão, o sacrificar seu tempo não é perdido. Eventualmente, chegará o momento certo e a perspectiva certa, que a deixara seguir em frente.</Text>
                <Text style={styles.txtparagraf}>Não confunda as personalidades do Enforcado como preguiçosas ou sortudas. Pode parecer que eles não estão fazendo nada e as oportunidades simplesmente aparecem. Seus momentos de suspensão não são perdidos porque eles os usam para reflexão, ganhar perspectiva e identificar oportunidades.</Text>

            <Text style={styles.txtH2}>O Enforcado como Sentimentos</Text>
                <Text style={styles.txtparagraf}>Quando o Enforcado aparece, é um sinal para refletir sobre seus sentimentos e tentar imaginar o completo oposto. Não significa que você precisa se sentir assim, mas o incentiva a contemplar sentimentos diferentes. Renda-se ao momento, faça uma pausa e veja o que ele faz.</Text>
                <Text style={styles.txtparagraf}>Se você está se perguntando como alguém se sente por você e o Enforcado aparece. Imagine qual é o seu sentimento e vire de ponta cabeça. Não significa que será a resposta certa, mas pode ajudá-lo a ganhar coragem para perguntar e descobrir.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot O Enforcado</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Enforcado?</Text>
                    <Text style={styles.txtparagraf}>A carta do Enforcado indica que você se sente preso a algo ou alguém que está impossibilitando-o de ser realmente feliz. Você já tentou de tudo, mas parece que não existe saída para escapar desse sentimento angustiante que o sufoca a algum tempo, deixando-o desesperançoso e desanimado. O que você precisa compreender é que você está se deixando dominar pelo desespero, e isso o impede de ver as coisas claramente. Você possui total capacidade para reverter qualquer situação que não lhe faça bem e o deixe infeliz, só precisa encontrar um ponto de equilíbrio, manter a calma e começar a agir racionalmente. Talvez, seja necessário sacrificar alguma coisa para conseguir se libertar do passado e dar os primeiros passos para um futuro melhor. Caso esteja passando por algum dilema em sua vida, esta carta aconselha a olhar tudo por novos ângulos e adiar esta decisão até que se sinta realmente seguro para dar um passo à frente. Reflita muito antes de agir.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot  O Enforcado invertido?</Text>
                        <Text style={styles.txtparagraf}>Quando na posição invertida, o Enforcado indica que você está agindo por impulso e tomando decisões para a sua vida sem calcular as consequências de seus atos a longo prazo. É como se você estivesse pulando de galho em galho sem saber o lugar exato de permanecer, pois não consegue decidir para onde quer ir. Esta sua atitude acaba o colocando em situações perigosas e desagradáveis, que não tem nada a acrescentar em sua vida, por isso é muito importante que você consiga perceber isso para parar a tempo antes que acabe com as chances de um futuro maravilhoso. Esta carta também pode indicar um sentimento de decepção pelas coisas não estarem indo conforme você desejou. Você pode sentir que está se doando ao máximo, mas não recebe retorno. Talvez, você precise apenas mudar suas táticas. Gastar suas energias agindo sempre da mesma forma pode ser desgastante e não o levará a nenhum lugar. Seja mais flexível e reflita sobre suas atitudes.</Text>
                <Text style={styles.txtH3}>O que a carta de tarot O Enforcado significa em uma leitura de amor?</Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, você, ou seu parceiro, está com vontade de retroceder para reavaliar a situação atual da relação. O sentimento de que a união não está caminhando para a direção que gostaria é justamente o que o faz querer parar e analisar quais os passos que vocês deram que os levaram até aqui. Ao fazer isso, é importante não se deixar levar pela emoção, tomando decisões precipitadas que envolvem o futuro de vocês. Dar um tempo para a relação se estabilizar novamente e se reconectarem é a melhor maneira de conseguirem ajustar as coisas. Aproveite este tempo para conversar com seu parceiro e juntos estabelecerem o que esperam da relação daqui para a frente. Se solteiro, é preciso ter calma antes de se entregar a um novo relacionamento, nem todos estão com as mesmas expectativas que você e querer atropelar o tempo do outro será muito prejudicial para todos. Utilize o tempo para conhecer melhor a outra pessoa e socializar com amigos.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, o Enforcado mostra que um de vocês está tentando a todo custo manter o relacionamento por medo de ficar sozinho ou de ser obrigado a buscar um novo amor. Vocês precisam rever o que realmente esperam de um relacionamento e pensar se vale mesmo a pena se sacrificar por uma união que não apresenta nenhum horizonte de crescimento. Caso vocês queiram permanecer juntos e percebam que ainda existe um sentimento genuíno em relação a vocês, então é preciso rever hábitos, padrões e crenças antes de seguirem em frente. Se abram a novas perspectivas e tenham consciência antes de agir. Se solteiro, você está repetindo os mesmos padrões de seus relacionamentos passados nos novos e isso o impede de começar uma relação saudável. É preciso rever suas atitudes.</Text>
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
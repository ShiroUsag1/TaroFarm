import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Chariot() {

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
            <Text style={styles.txtH1}>O Carro</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-07.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave O Carro</Text>
                <Text style={styles.txtparagraf}>Antes de entrarmos nos significados do O Carro no amor, relacionamentos, carreira, dinheiro e muito mais, vamos dar uma olhada em suas palavras-chave. Palavras-chave resumem os significados das cartas de tarot e são excelentes maneiras de memorizar os significados das cartas.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: controle, força de vontade, sucesso, ação, determinação</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: agressão, oposição, falta de direção</Text>

            <Text style={styles.txtH2}>O Carro significado</Text>
                <Text style={styles.txtparagraf}>A carta O Carro é sobre vencer as incertezas dentro de você e alcançar seu objetivo por meio de determinação, foco e força de vontade. Portanto, quando ele aparecer na leitura de tarot, considere isso um sinal de encorajamento. É revelador que você está no controle de seu caminho e pode ter sucesso.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>O Carro em uma leitura de amor de tarot diz que agora é a hora de assumir o controle de sua vida amorosa. Isso o incentiva a determinar o que você procura no amor e nos relacionamentos. Quando você conhece seus objetivos, o Carro o incentiva a agir. Quando é você quem está conduzindo o carro do amor, é provável que veja recompensas. Coragem, coração e determinação o levarão ao sucesso.</Text>
                        <Text style={styles.txtparagraf}>O Carro no significado do amor na carta de tarot também pode nos lembrar de encontrar um equilíbrio entre duas forças opostas. As duas esfinges têm aparência oposta, o que pode ser visto como uma metáfora para disputas tolas, competição e ciúme entre companheiros. Se isso soa familiar em seus relacionamentos, você precisará assumir o controle da situação. A comunicação é a chave, mas o Carro também o lembra de dirigir com determinação e não permitir que ninguém o atropele.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Carro é uma carta excelente em leituras de tarot para dinheiro e carreira. Ele aconselha você a definir seus objetivos e agir. Com uma percepção clara do que você deseja da sua vida profissional, você pode se concentrar em chegar lá. Motivação, autodisciplina e controle são a receita de sucesso do o carro.</Text>
                        <Text style={styles.txtparagraf}>Se você está procurando por novas oportunidades, o Carro sinaliza para você esboçar um plano, agir e permanecer focado – não importa quais desafios possam surgir em seu caminho. Você pode notar sua determinação e confiança testadas quando outras pessoas tentam bloquear e distrair você de conseguir o que deseja. Mantenha a calma e avance.</Text>
                        <Text style={styles.txtparagraf}>Em relação ao dinheiro, o Carro te chama para assumir o controle de sua situação. Se houve desafios econômicos, agora é hora de enfrentá-los e vencê-los. O Carro dá a você um impulso motivacional e determinação para superar esses desafios. Com foco e disciplina, você será capaz de melhorar sua situação e chegar onde deseja.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>O carro é um sinal positivo nas leituras de saúde e espiritualidade. Como a carta significa força de vontade, ela o lembra de estar determinado ao trabalhar em prol do bem-estar físico, emocional ou espiritual. O Carro exige responsabilidade e o encoraja a assumir o controle de sua situação.</Text>
                        <Text style={styles.txtparagraf}>O aparecimento do Carro em uma leitura de saúde pode indicar que você está assumindo responsabilidades demais. Por causa disso, você está sendo puxado em direções opostas e sua força e confiança estão sendo testadas. Esteja determinado e confiante em colocar seus limites para permitir-se descansar e permanecer no controle.</Text>
                        <Text style={styles.txtparagraf}>Em um contexto espiritual, o Carro o chama para ser corajoso e experimentar coisas novas. Determine o que você deseja e encontre o caminho potencial para você. Mantenha o foco em sua jornada espiritual e isso o levará adiante.</Text>

            <Text style={styles.txtH2}>O Carro significado invertido</Text>
                <Text style={styles.txtparagraf}>A carta do tarot O Carro invertida em uma leitura pode ajudá-lo a se tornar consciente de sua agressividade e como ela também pode impedir que você siga em frente. Também pode revelar que forças opostas e obstáculos estão tomando conta de sua vida. Você está enfrentando os desafios da indolência e da lentidão. O Carro invertido também pode indicar uma falta de direção e autoridade sobre sua vida. Eles podem ser distorcidos por sua obsessão e impulsos com seus objetivos. O Carro invertido deve funcionar como um lembrete de que você precisa apertar o punho, encontrar um equilíbrio e recuperar o controle de sua vida.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>No amor e no relacionamento, o Carro invertido indica a necessidade de equilíbrio nos relacionamentos ou na busca por buscá-los.</Text>
                        <Text style={styles.txtparagraf}>Se você esta solteiro, o significado invertido do Carro no amor pode indicar que um desejo incomumente forte de encontrar o amor tomou conta de você. Suas tentativas de encontrar alguém foram tão longe que começaram a prejudicar outras áreas da vida. Considere o Carro invertido como um lembrete de que não podemos controlar tudo ao nosso redor. Ninguém tem um poder superior de fazer a pessoa perfeita aparecer para eles. Ter otimismo e entusiasmo é essencial, mas você não pode apressar o amor, você precisa de paciência.</Text>
                        <Text style={styles.txtparagraf}>Para aqueles que estão em um relacionamento, o carro invertido pode sinalizar que as coisas podem estar fora de equilíbrio. Você pode estar exagerando em algumas áreas de sua vida, o que pode estar prejudicando seu relacionamento. O desequilíbrio pode ser a causa raiz dos conflitos em seu relacionamento, por isso é vital encontrar um equilíbrio tendo uma discussão aberta. O Carro invertido também pode ser um sinal de que você parece muito agressivo em seu relacionamento. Você está ouvindo seu parceiro ou está usando o ataque como uma forma de defesa quando encontra opiniões conflitantes?</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Em leituras de tarot relacionadas a dinheiro e carreira, o Carro invertido pode sinalizar falta de agressividade ou excesso dela. Você pode ser muito passivo para obter as oportunidades que deseja, ou sua obsessão com seus objetivos de carreira está causando mais danos do que benefícios. Nenhuma das abordagens atende seus objetivos e desejos profissionais. A outra o impede de conseguir o que deseja. O outro apenas o torna um candidato indesejável para novas oportunidades. O carro invertido chama você para avaliar sua abordagem atual e ajustar seu nível de agressão para o meio.</Text>
                        <Text style={styles.txtparagraf}>Em relação às finanças, o Carro invertido lembra que você deve ser analítico e responsável com seus gastos. Tenha cuidado ao tomar uma decisão de compra sem saber o que está comprando. O Carro invertido também pode significar que sua situação financeira está estagnada porque você não é ousado o suficiente para agir. Você pode hesitar demais em assumir riscos e fazer investimentos para permitir que o dinheiro economizado trabalhe para você.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>O Carro invertido no contexto da saúde também exige equilíbrio. Suponha que você esteja sofrendo de falta de motivação. Nesse caso, você precisa entender as implicações de ficar no sofá e comer demais. Tente encontrar algo que aumente a sua motivação. Um novo hobby ou até mesmo um aplicativo de monitoramento de esportes pode ser o que você precisa. Se você está animado e realmente trabalhando, lembre-se de que paciência é a chave para atingir seus objetivos.</Text>
                        <Text style={styles.txtparagraf}>Com relação à espiritualidade, O Carro na posição invertida pode indicar que você está pronto para uma jornada espiritual. Deixe o Carro de cabeça para baixo lembrá-lo de não exagerar. É fácil ser pego em buscas espirituais e acabar indo com algo que o cega de outros caminhos ou abordagens.</Text>

            <Text style={styles.txtH2}>O Carro Sim ou Não</Text>
                <Text style={styles.txtparagraf}>Em perguntas que podem resultar em uma resposta Sim ou Não, O Carro pede ação em direção à positividade. Portanto, é um “Sim”. Carro incentiva você a manter o foco e acreditar em suas habilidades para encontrar o sucesso.</Text>

            <Text style={styles.txtH2}>Combinações O Carro</Text>
                <Text style={styles.txtparagraf}>O Carro nos encoraja a usar nossa força de vontade e foco para triunfar quaisquer obstáculos que surjam no caminho de alcançar nossos objetivos. Isso nos encoraja a acreditar em nós mesmos, definir nossos propósitos e agir quando combinados com outras cartas do tarot.</Text>
                    <Text style={styles.txtH3}>O Carro e A Morte</Text>
                        <Text style={styles.txtparagraf}>A Morte é um sinal de fim e uma mudança significativa em nossas vidas. Combinar com o Carro é um sinal de que você tem tudo para superar os desafios causados ​​por essa mudança. Com foco e determinação, você prevalecerá na situação e terá sucesso.</Text>
                    <Text style={styles.txtH3}>O Carro e A Justiça</Text>
                        <Text style={styles.txtparagraf}>A Justiça é uma chamada para equilíbrio e responsabilidade pelas ações que você executa. Quando combinado com o Carro, podemos ler isso como um chamado para assumir o comando e controlar a situação e lembrar de respeitar as regras e limites do campo de jogo.</Text>
                    <Text style={styles.txtH3}>O Carro e O Jugamento</Text>
                        <Text style={styles.txtparagraf}>O Julgamento, apesar de todo o seu drama, é uma carta para o despertar e novos começos. Ter combinado com o Carro é um sinal de alívio. A garantia de que você pode triunfar na nova jornada à frente. Lembra você de definir seus objetivos, manter o foco neles e agir.</Text>
                    <Text style={styles.txtH3}>O Carro e O Mundo</Text>
                        <Text style={styles.txtparagraf}>O Mundo é uma carta de conclusão, conquistas e possibilidades. Quando combinadas com O Carro, cheias de autocontrole, vejo essas cartas intensificando a mensagem de que você encontrará o sucesso e alcançará seus objetivos.</Text>
                    <Text style={styles.txtH3}>O Carro e A Estrela</Text>
                        <Text style={styles.txtparagraf}>A Estrela dá a você uma sensação de esperança e inspiração. Você tende a se achar otimista em relação aos seus sonhos. O Carro podem se materializar. Mesmo assim, isso exigirá trabalho, foco e determinação.</Text>

            <Text style={styles.txtH2}>O Carro como tipos de personalidade</Text>
                <Text style={styles.txtparagraf}>As personalidades do o Carro são focadas, determinadas e no controle. Eles podem obter o controle de uma situação de estagnação, colocá-la em movimento e superar todos os desafios em seu caminho. Eles são personalidades um tanto destemidas e direcionam para o sucesso. Portanto, você pode ver essas personalidades assumindo posições de liderança na vida profissional.</Text>
                <Text style={styles.txtparagraf}>Os aspectos negativos de sua personalidade são que às vezes podem ser excessivamente agressivos para conseguir o que desejam. Sua motivação e obsessão por objetivos e metas às vezes distorcem sua visão e os impedem de ver outras perspectivas. Eles podem não ser bons em receber críticas e podem lutar contra a oposição com agressão.</Text>

            <Text style={styles.txtH2}>O Carro como sentimentos</Text>
                <Text style={styles.txtparagraf}>Se você estiver perguntando ao tarot como alguém se sente a seu respeito, a carta do tarot O Carro aparecerá. Nesse caso, você está com sorte se deseja a atenção dessa pessoa. O Carro tende a rever seus caminhos para conseguir o que deseja. Há uma determinação e um ímpeto que quase parecem imparáveis. Eles têm sentimentos substanciais por você e não é provável que guardem as emoções para si por muito mais tempo.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot O Carro</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Carro?</Text>
                    <Text style={styles.txtparagraf}>Quando a carta do Carro aparece na leitura, ela indica que o momento é de manter o foco, a confiança no seu potencial de trabalho e a determinação para seguir em frente com projetos e ideias, mesmo que pelo seu caminho brote distrações ou obstáculos. É preciso ser centrado e estratégico para conseguir lidar com imprevistos. Ser ousado e apostar em suas habilidades o ajudará e muito a realizar tudo aquilo que deseja e sempre sonhou. Esta carta também avisa para um comportamento extremo que atrapalha o crescimento. Você pode estar sendo muito agressivo e autoritário para conquistar seus objetivos, ou ficando na defensiva achando que todos estão contra você. Seja qual for, tente encontrar um equilíbrio para suas emoções antes que acabe explodindo e perdendo o controle de sua vida. </Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Carro invertido?</Text>
                        <Text style={styles.txtparagraf}>Quando na posição invertida, o Carro mostra que você se sente impotente, pois perdeu o controle sobre as coisas e projetos que estavam em andamento. Isso se deve ao fato de você ter se deixado dominar pelas forças externas que acabaram bloqueando seu caminho com obstáculos e problemas. Você perdeu as forças antes de conseguir superar todos os desafios e esse cansaço o deixou desanimado a ponto de acreditar não ser possível alcançar o sucesso. Você precisa assumir novamente o controle de sua vida e se livrar de tudo o que lhe impede de seguir em frente, sejam pessoas, pensamentos ou situações. Analisar bem como você chegou a este ponto para saber o que está fazendo de errado é a melhor maneira de conseguir dar a volta por cima e se reerguer. Acredite em seu potencial e nas suas habilidades, você possui tudo o que é preciso para sair vitorioso em sua empreitada.​</Text>
                <Text style={styles.txtH3}>O que a carta de tarot O Carro significa em uma leitura de amor? </Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, o Carro apresenta uma união que aos poucos perde seu equilíbrio por conta de situações externas que acabam afetando muito vocês e a maneira como estão se comportando um com o outro. Estresse por conta do trabalho ou responsabilidades excessivas com a família podem estar sugando as energias de vocês e impedindo que se dediquem à relação como gostariam. Tirar um tempo para vocês, controlar as emoções e equilibrar novamente a mente e o coração, os ajudará a se reconectarem. Se solteiro, você apresenta um grande cansaço causado por relações passadas. O que precisa no momento é de um tempo para recobrar suas energias. Não tente começar uma relação nova estando desgastado. Se recupere primeiro.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, é preciso ter paciência para conseguir alcançar novamente o equilíbrio dentro da relação. Vocês precisam compreender que cada um possui o seu próprio tempo para progredir, e respeitar isso os ajudará a amadurecer como parceiros. Não queira apressar as coisas por sentir que o momento chegou, o momento deve ser dos dois e vivido juntos, sem pressão, para que seja prazeroso. Se está solteiro, não queira se entregar logo de cara a um novo pretendente, aproveite as novas emoções que estão surgindo para conhecê-lo melhor.</Text>
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
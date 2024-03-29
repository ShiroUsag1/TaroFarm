import React from "react";
import {Text, View, ScrollView, Image, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

export default function Hierophant() {

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
            <Text style={styles.txtH1}>O Hierofante</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-05.jpg')} />
            </View>
            <Text style={styles.txtH2}>Palavras-chave O Hierofante</Text>
                <Text style={styles.txtparagraf}>Palavras-chave são resumos dos significados das cartas do tarot. Eles também são excelentes meios para memorizá-los, então, antes de pularmos para os significados mais profundos das cartas, vamos dar uma olhada neles aqui.</Text>
                <Text style={styles.txtparagraf}>Palavras-chave: autoridade, convencionalidade, conformismo, a importância da espiritualidade, educação</Text>
                <Text style={styles.txtparagraf}>Palavras-chave invertida: rebelião, não convencionalidade, não conformidade, novos métodos, ignorância</Text>
                <Text style={styles.txtparagraf}>Agora que os componentes visuais e as palavras-chave do Hierofante foram divulgados, vamos avançar em seus significados no amor, relacionamentos, carreira, dinheiro, saúde e espiritualidade.</Text>

            <Text style={styles.txtH2}>O Hierofante significado</Text>
                <Text style={styles.txtparagraf}>A carta do tarot Hierofante, representa os valores e crenças convencionais. Em vez de ser inovador e solo à sua própria maneira, o Hierofante o encoraja a seguir princípios fundamentados que funcionam.</Text>
                <Text style={styles.txtparagraf}>Ver o Hierofante é um chamado para trazer de volta os costumes, valores e tradições familiares que foram esquecidos. É hora de confiar nas opções baseadas nos métodos tradicionais, recorrer aos mais velhos em busca de sabedoria e nutrir seus valores e crenças espirituais.</Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}>O Hierofante nas leituras de amor e relacionamento está sinalizando para relacionamentos tradicionais e socialmente aprovados. Você pode estar se sentindo atraído pela ideia de uma união segura e duradoura e de parceiros que são com certeza aprovados por seus entes queridos. São parceiros que têm uma ótima aparência no papel e compartilham valores e sistemas de crenças semelhantes.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento, o Hierofante significa que a progressão tradicional em seu relacionamento e os valores convencionais são respeitados. Isso, é claro, significa que o casamento e os modelos convencionais de família estão em jogo. É também um sinal de que pode ser um bom momento para revitalizar as antigas tradições e reuniões familiares.</Text>
                        <Text style={styles.txtparagraf}>O significado do Hierofante no amor também pode assumir uma posição sobre aspectos mais amplos do amor e nos lembrar que nossos parceiros devem ser tratados com justiça e respeito. Mesmo que seu parceiro não compartilhe de todos os seus valores e tradições, o Hierofante nos incentiva a aprender, compreender e respeitar o raciocínio por trás das crenças um do outro.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>O Hierofante em dinheiro e leitura de carreira é uma indicação de que você encontrará sucesso aderindo aos métodos convencionais e coerência de grupo. Isso significa que agora é o momento de ficar seguro e puxar as mesmas cordas usando uma metodologia que já comprovou que funciona.</Text>
                        <Text style={styles.txtparagraf}>O Hierofante também pode sugerir que um mentor mais experiente pode ajudá-lo a progredir em sua carreira. Essa pessoa pode guiá-lo através dos valores e tradições da empresa e apresentá-lo às formas de trabalhar. A carta também destaca a importância da educação. Incentiva o investimento na aprendizagem. Talvez agora seja um bom momento para fazer cursos que irão expandir seus conhecimentos em sua área e ajudá-lo em sua carreira.</Text>
                        <Text style={styles.txtparagraf}>Economicamente, o Hierofante o aconselha a ser muito conservador com dinheiro e a se ater a opções de investimento seguras, tradicionais e estabelecidas. Experimentos arriscados ou novos instrumentos financeiros podem causar problemas para você. Você também deve ser conservador com seus gastos. Coloque dinheiro de lado para manter uma reserva para despesas que surgem inesperadamente.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>A carta do tarot Hierofante sugere que é sábio se concentrar nas rotinas tradicionais de saúde. Nutrição diversificada, exercícios leves diários e uma quantidade saudável de sono irão impulsionar seu sistema imunológico e ajudá-lo a se sentir energizado.</Text>
                        <Text style={styles.txtparagraf}>Ao ler sobre o seu caminho espiritual, o Hierofante é o construtor da ponte entre a humanidade e o poder divino. Ele destaca a importância da espiritualidade e da religião na vida. Portanto, ele o incentiva a se reconectar com o seu lado espiritual.</Text>
                        <Text style={styles.txtparagraf}>Embora esta carta seja facilmente associado à prática religiosa tradicional, isso não significa que você precisará segui-los se eles não falarem com você. Mas você certamente se beneficiará com a construção de algum tipo de ritual ou cerimônia em sua prática espiritual. O Hierofante também pode ser um presságio para algum tipo de guia espiritual que entra em sua vida para ajudá-lo em seu caminho espiritual.</Text>

            <Text style={styles.txtH2}>O Hierofante significado invertido</Text>
                <Text style={styles.txtparagraf}>O Hierofante invertido simboliza inconformidade, rebelião, ignorância e não convencionalidade com as regras e valores tradicionais. Também pode indicar novos métodos de trabalho, bem como abertura e liberdade. Você pode estar sentindo o desejo de moldar as regras e formas de trabalho existentes. Ou você pode estar sentindo que as estruturas e crenças estabelecidas estão limitando sua vida.</Text>
                <Text style={styles.txtparagraf}>O Hierofante invertido pede que você seja seu próprio professor. Você deve buscar sua sabedoria interior para encontrar seu poder. Você é orientado a seguir sua trilha pessoal em vez de seguir os outros. Aprender a viver de acordo com suas próprias regras lhe trará a liberdade e expandirá positivamente seus horizontes. O Hierofante invertido também pode indicar que você está aderindo desesperadamente aos métodos e valores tradicionais. Ou também pode sugerir que você tem sentimentos mistos de culpa e vergonha sempre que vai contra os valores de seus pais.</Text>
                    <Text style={styles.txtH3}>Amor e Relacionamento</Text>
                        <Text style={styles.txtparagraf}>No amor e nos relacionamentos, o Hierofante invertido é um sinal de que as uniões e valores convencionais podem não estar em seu repertório no momento. Se você for solteiro, seria melhor reservar esse tempo para si mesmo e não sonhar com relacionamentos tradicionais. Pode ser um sinal de que focar em outra coisa será melhor no momento. Talvez resulte em algo inesperado e excitante.</Text>
                        <Text style={styles.txtparagraf}>Se você está em um relacionamento, o Hierofante invertido pode indicar que seu relacionamento pode ter ficado ligeiramente estagnado. A emoção está faltando e sua conexão anteriormente prática e segura começou a parecer um pouco simples. Se for esse o caso, é essencial ser franco e falar sobre o que o entusiasma. Tente encontrar coisas divertidas juntos nesses momentos.</Text>
                        <Text style={styles.txtparagraf}>Ao se perguntar sobre o futuro junto com alguém, o Hierofante invertido indica que você e os valores de seu parceiro não se alinham bem. Lembre-se de que isso não significa necessariamente que o relacionamento não funcionará. Exigirá apenas alguns compromissos de ambos. Juntos, vocês vão ensinar e aprender uns com os outros, e isso pode conectá-lo de maneiras que não seriam possíveis ao seguir o caminho convencional.</Text>
                    <Text style={styles.txtH3}>Dinheiro e Trabalho</Text>
                        <Text style={styles.txtparagraf}>Oposto à posição vertical, o Hierofante invertido pode indicar que você é atraído a assumir riscos reconhecidos e métodos não convencionais de ganhar dinheiro. A ideia de começar um projeto paralelo ocupa sua mente. Ainda assim, o Hierofante invertido o lembra de avaliar seus retornos e riscos com cuidado, antes de mergulhar muito fundo nesses empreendimentos.</Text>
                        <Text style={styles.txtparagraf}>Em relação à sua carreira, o Hierofante invertido indica que suas tarefas e perspectivas atuais podem parecer inadequadas e um tanto frustrantes. Talvez você almeje algo com mais criatividade e liberdade, e não a burocracia, os processos e as regras que estão restringindo seu trabalho atual. Você pode sentir a necessidade de mudar a forma como as coisas são feitas ou introduzir algo inteiramente novo que pode ser totalmente diferente da cultura existente da empresa. O Hierofante invertido chama você para avaliar os riscos de fazer mudanças e considerar como você se sentiria seguindo seu próprio caminho.</Text>
                    <Text style={styles.txtH3}>Saúde e Espiritualidade</Text>
                        <Text style={styles.txtparagraf}>Em relação à saúde, o Hierofante invertido lembra que não devemos ser muito rígidos ao seguir as rotinas de nutrição ou exercícios. Pode ser benéfico mudar um pouco as coisas e tentar algo fora do comum. Talvez a assinatura de um aplicativo de treinamento pessoal seja uma coisa dessas. Isso pode aumentar sua motivação e fornecer um impulso extra para seus níveis de energia.</Text>
                        <Text style={styles.txtparagraf}>No contexto espiritual, a carta de tarot invertida do Hierofante pode significar que o não convencional é o caminho a percorrer. Você deve tentar abandonar as velhas crenças que não funcionam mais para você. Experimente caminhos espirituais incomuns e descubra o que funciona para você. Para ser uma pessoa espiritual não significa que você precisa seguir a abordagem tradicional.</Text>

            <Text style={styles.txtH2}>O Hierofante Sim ou Não</Text>
                <Text style={styles.txtparagraf}>Para perguntas que podem resultar em uma resposta Sim ou Não, O Hierofante o incentiva a explorar soluções tradicionais e respeitar os valores convencionais. Ele também destaca que o conhecimento passa pela educação e destaca a importância das conexões espirituais. Não há um apelo assertivo à ação em questões relacionadas com Sim ou Não; portanto, a resposta é “talvez”.</Text>

            <Text style={styles.txtH2}>Combinações O Hierofante</Text>
                <Text style={styles.txtparagraf}>O Hierofante adiciona um pouco de espiritualidade e valores tradicionais às combinações de cartas de tarot. Ele orienta para buscar respostas de mentores de educação ou religião.</Text>
                    <Text style={styles.txtH3}>O Hierofante e A Sacerdotisa</Text>
                        <Text style={styles.txtparagraf}>Essa combinação une as duas contrapartes. A Sacerdotisa obtém sua sabedoria por meio da intuição e o Hierofante dos livros que lê. Ambos são cartas muito espirituais. Vê-los juntos é um sinal poderoso para investir tempo em seu bem-estar espiritual.</Text>
                    <Text style={styles.txtH3}>O Hierofante e Reis de Paus</Text>
                        <Text style={styles.txtparagraf}>Ambos representam autoridade e lideram seus próprios reinos. O Rei de Paus é um líder muito masculino e visionário. O Hierofante é a líder que atua como uma conexão entre o poder superior e a humanidade. Vê-los juntos destaca a visão e ser um líder. Talvez seja uma chamada para buscar o conselho de alguém mais velho um sábio que domina os negócios e a espiritualidade.</Text>
                    <Text style={styles.txtH3}>O Hierofante e Os Amantes</Text>
                        <Text style={styles.txtparagraf}>Os Amantes é uma carta de relacionamentos e escolhas e o Hierofante de formas e valores convencionais. Vejo essa combinação sinalizando fortemente para uma progressão tradicional em seu relacionamento. Se for novo, esse relacionamento pode acabar no altar.</Text>
                    <Text style={styles.txtH3}>O Hierofante e A Lua</Text>
                        <Text style={styles.txtparagraf}>A Lua é a carta da ilusão e do engano. Representa que as coisas não são o que parecem ser ou que há mal-entendidos em sua vida. Ter a Lua combinada com o Hierofante é um chamado para buscar respostas de sua espiritualidade ou de uma pessoa em quem você pode confiar.</Text>
                    <Text style={styles.txtH3}>O Hierofante e Ás de Copas</Text>
                        <Text style={styles.txtparagraf}>A combinação do Ás de Copas e do Hierofante traz uma energia auspiciosa quando se trata de relacionamentos. O Ás de Copas traz um novo começo para o seu mundo emocional. É um começo que promete muito, pois obtém o apoio do Hierofante.</Text>
                        

            <Text style={styles.txtH2}>O Hierofante como tipos de personalidade</Text>
                <Text style={styles.txtparagraf}>Pessoas que têm a personalidade do Hierofante são inteligentes, educadas e espirituais. Eles são um pouco conservadores e convencionais em suas crenças e valores. Eles são muito filosóficos e sempre continuam em busca de respostas para as grandes questões da vida. Eles gostam de conversar e amam educar os outros com seus conhecimentos.</Text>
                <Text style={styles.txtparagraf}>Se você tem uma personalidade Hierofante em um de seus amigos ou pessoas próximas, você está com sorte. Eles são muito leais, empáticos e sempre dispostos a ajudar e apoiar, quer você precise de ajuda com coisas simples, tristezas sentimentais ou conselhos sobre o caminho a seguir. Muitas vezes, você encontrará as personalidades Hierofantes nos professores.</Text>

            <Text style={styles.txtH2}>O Hierofante como sentimentos</Text>
                <Text style={styles.txtparagraf}>Perguntar ao tarot como alguém se sente em relação a você e o Hierofante aparece é um sinal de que há potencial para um relacionamento duradouro. Você e ele se encaixam muito bem de acordo com os padrões tradicionais de relacionamento, e seus valores e crenças se alinham bem. Suas famílias ficariam emocionadas em receber uns aos outros. Isso definitivamente terá um impacto positivo nos sentimentos de como eles se sentem em relação a você.</Text>

            <Text style={styles.txtH2}>Perguntas gerais sobre a carta do tarot O Hierofante</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Hierofante?</Text>
                    <Text style={styles.txtparagraf}>O Hierofante é uma carta que simboliza tradições, instituições e estruturas sociais com valores bem delimitados. Ela aconselha a seguir as convenções e regras já existentes e não se arriscar com instituições inovadoras e fora de seu contexto atual, pois podem representar uma grande armadilha religiosa, caso não esteja realmente preparado para saltar sobre o desconhecido. Se sentir a necessidade de se afastar de velhos costumes é preciso ter a certeza do que está fazendo antes dar o primeiro passo rumo a esta mudança. Ter cautela ao querer se rebelar contra o sistema é a melhor forma de fazê-lo. Esta carta também pode indicar a presença de alguém ligado à área espiritual e religiosa que possui  grande sabedoria e o guiará e orientará em seu caminho através de mentoria e conselhos. Abrace o que esta pessoa tem a lhe dizer e utilize para seu crescimento.</Text>
                <Text style={styles.txtH3}>O que significa a carta do tarot O Hierofante invertido?</Text>
                        <Text style={styles.txtparagraf}>O Hierofante na posição invertida mostra o quanto você se sente limitado e restrito para avançar com suas ideias e projetos, pois se encontra envolto em muitas regras, convenções e tradições impostas sobre você, o que provoca um cansaço emocional gigante. Talvez você esteja muito preocupado com a opinião alheia e isso o está impedindo de se libertar daquilo que o sufoca, ou, talvez, você sinta muita vergonha por estar agindo contra o fluxo, como se estivesse sendo julgado por seus atos a todo instante. É preciso mudar suas táticas para romper com essa estrutura tradicional e começar a ouvir somente a si mesmo sem se sentir mal por pensar e agir diferente do esperado. Se ficar se importando com a opinião dos outros acabará enfraquecido e trilhando um caminho que não lhe pertence. </Text>
                <Text style={styles.txtH3}>O que a carta de tarot O Hierofante significa em uma leitura de amor? </Text>
                    <Text style={styles.txtparagraf}>Se está em um relacionamento, o Hierofante indica um aprofundamento da relação através de um novo compromisso firmado por vocês. Pode ser casamento, morar juntos ou aumentar a família, independente, vocês estão preparados para dar mais um passo dentro desta união, pois se encontram muito mais comprometidos um com o outro do que outrora. Se estiver solteiro, um novo amor começa a despontar mais a frente dando início a um novo relacionamento envolto em respeito, crenças e valores iguais, compromisso e muito amor.</Text>
                    <Text style={styles.txtparagraf}>Quando na posição invertida, mostra um relacionamento fadado ao fracasso por conta dos aborrecimentos e atritos que ocorrem constantemente entre vocês. Você e seu parceiro possuem crenças e costumes destoantes entre si e, embora no início da relação tenha sido exatamente isso que os atraiu, atualmente é o que os distancia. É difícil conseguir viver com alguém que pensa diferente de nós, mas não é impossível. O que vocês precisam fazer é respeitar a opinião do outro, manter a mente aberta e se permitir aprender com a visão diferente da sua. Se solteiro, você está pronto para se relacionar com alguém que possui opiniões diferentes da sua e explorar coisas fora do padrão convencionado. Sair da sua zona de conforto será prazeroso e te permitirá crescer.</Text>
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
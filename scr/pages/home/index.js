import React, {useState} from "react";
import { Button, Text, View, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    
    const navigation = useNavigation();
    

    const [carta, setCarta] = useState('');
        const valorInput = () => {}

    

    return (
        <ScrollView>     
            <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../../assets/Tarotfarm.png')} />
            </View>

            <Text style={styles.txtH2}>Insira o nome da carta</Text>

            <TextInput 
                style={styles.inputForm}
                autoCorrect={false}
                autoCapitalize="words"
                value={carta}
                onChangeText={text => setCarta(text)}
            />
            <TouchableOpacity style={styles.btnSubmitForm} onPress={() => { navigation.navigate(carta)}}>
                <Text style={styles.txtSubmitForm} >
                    Pesquisar
                </Text>
            </TouchableOpacity>

            <Text style={styles.txtparagraf} onPress={() => { navigation.navigate('Biblioteca')}}>
                Acesse a <Text style={styles.linkLibrary}>Biblioteca</Text>
            </Text>

            <Text style={styles.notarodape}>
            Nota: Para os Arcanos Menores digite os números por extenso. Exemplo: Seis de paus, Ás de copas.
            </Text>

            <Text style={styles.notarodape}>
            Todas as informações contidas nesse aplicativo foram encontradas no site tarotfarm.com.br. Todos os créditos a autora Eliana Sousa.
            </Text>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B1F39'
    },
    logo: {
        margin:20,
        width: 300,
        height: 300
    },
    inputForm: {
        backgroundColor: "#fff",
        width: '88%',
        marginBottom: 16,
        color: '#222',
        fontSize: 18,
        borderRadius: 6,
        padding: 10
    },
    btnSubmitForm: {
        backgroundColor: '#C3B1E5',
        width: '40%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtSubmitForm: {
        color: '#fff',
        fontSize: 22
    },
    txtH2:{
        color: '#fff',
        paddingBottom: 15,
        fontSize: 22
    },

    linkLibrary: {
        color: '#FFD4D4',
        textDecorationLine: 'underline',
        fontSize:20
    },

    txtparagraf: {
        color: '#fff',
        margin: 30,
        fontSize:20
    },

    notarodape:{
        textAlign:'justify',
        color: '#fff',
        margin: 2,
        fontSize:15
    }
});
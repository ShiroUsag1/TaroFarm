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
            <Text style={styles.txtH1}>Os Amantes</Text>
            <View>
                <Image style={styles.logo} source={require('../../../../../../assets/linha.png')} />
            </View>
            <View>
                <Image style={styles.carta} source={require('../../../../../../assets/images/waite-06.jpg')} />
            </View>
            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>
                <Text style={styles.txtparagraf}></Text>
                <Text style={styles.txtparagraf}></Text>
                <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                    <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtparagraf}></Text>

            <Text style={styles.txtH2}></Text>
                <Text style={styles.txtH3}></Text>
                    <Text style={styles.txtparagraf}></Text>
                <Text style={styles.txtH3}></Text>
                        <Text style={styles.txtparagraf}></Text>
                <Text style={styles.txtH3}></Text>
                    <Text style={styles.txtparagraf}></Text>
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
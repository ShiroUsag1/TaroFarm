import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from "./pages/home";
import Biblioteca from "./pages/biblioteca";
import Start from "./pages/tarot/start";
import HowWorks from "./pages/tarot/how";
import Begining from "./pages/tarot/begining";
import Step1 from "./pages/tarot/begining/step1";
import Step2 from "./pages/tarot/begining/step2";
import Step3 from "./pages/tarot/begining/step3";
import Step4 from "./pages/tarot/begining/step4";
import Journey from "./pages/tarot/journey.js";
import Lovers from "./pages/tarot/cartas/arcanosMaiores/amantes";
import ArcanosMaiores from "./pages/tarot/cartas/arcanosMaiores";

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
                <Stack.Screen name="Biblioteca" component={Biblioteca} options={{ headerShown: false}}/>
                <Stack.Screen name="O que é" component={Start} options={{ headerShown: false}} />
                <Stack.Screen name="Como funciona?" component={HowWorks} options={{ headerShown: false}} />
                <Stack.Screen name="Começo" component={Begining} options={{ headerShown: false}} />
                <Stack.Screen name="Etapa 1" component={Step1} options={{ headerShown: false}}/>
                <Stack.Screen name="Etapa 2" component={Step2} options={{ headerShown: false}}/>
                <Stack.Screen name="Etapa 3" component={Step3} options={{ headerShown: false}}/>
                <Stack.Screen name="Etapa 4" component={Step4} options={{ headerShown: false}}/>
                <Stack.Screen name="Jornada" component={Journey} options={{ headerShown: false}}/>
                <Stack.Screen name="Os Amantes" component={Lovers} options={{ headerShown: false}}/>
                <Stack.Screen name="Arcanos Maiores" component={ArcanosMaiores} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
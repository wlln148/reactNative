import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './Telas/CartContext'
import Aviso from './Telas/aviso'
import Sobre from './Telas/sobre'
import Sobre2 from './Telas/sobre2'
import Sobre3 from './Telas/sobre3'
import Origem from './Telas/origem'
import Tipos from './Telas/tipos'
import Nacionalidades from './Telas/nacionalidades'
import Carrinho from './Telas/carrinho'

import Uruguai from './Telas/Uruguai/tiposUruguai'
import KitUruguai from './Telas/Uruguai/KitsUruguai'
import RoseUruguai from './Telas/Uruguai/RoseUruguai'
import BrancoUruguai from './Telas/Uruguai/BrancoUruguai'
import TintoUruguai from './Telas/Uruguai/TintoUruguai'

import Chile from './Telas/Chile/tiposChile'
import KitChile from './Telas/Chile/KitsChile'
import RoseChile from './Telas/Chile/RoseChile'
import BrancoChile from './Telas/Chile/BrancoChile'
import TintoChile from './Telas/Chile/TintoChile'

import Argentina from './Telas/Argentino/tiposArgentino'
import KitArgentina from './Telas/Argentino/kitsArgentino'
import RoseArgentina from './Telas/Argentino/roseArgentino'
import BrancoArgentina from './Telas/Argentino/BrancoArgentino'
import TintoArgentina from './Telas/Argentino/tintoArgentino'

import TintoBrasil from './Telas/Brasil/TintoBrasil'
import BrancoBrasil from './Telas/Brasil/BrancoBrasil'
import RoseBrasil from './Telas/Brasil/RoseBrasil'
import KitsBrasil from './Telas/Brasil/KitsBrasil'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="aviso">
       <Stack.Screen name="aviso" component={Aviso} options={{ title: "aviso", headerShown: false }} />
        <Stack.Screen name="sobre" component={Sobre} options={{ title: "Nossa história", headerShown: false }} />
        <Stack.Screen name="sobre2" component={Sobre2} options={{ title: "Nossa história", headerShown: false }} />
        <Stack.Screen name="sobre3" component={Sobre3} options={{ title: "Nossa história", headerShown: false }} />
        <Stack.Screen name="origem" component={Origem} options={{ title: "Nacionalidade Vinhos", headerShown: false }} />
        <Stack.Screen name="tipos" component={Tipos} options={{ title: "Tipos de Vinhos", headerShown: false }} />
        <Stack.Screen name="nacionalidades" component={Nacionalidades} options={{ title: "Tipos de Vinhos", headerShown: false }}/>
        <Stack.Screen name="carrinho" component={Carrinho} options={{ title: "Carrinho", headerShown: false}}/>

        <Stack.Screen name="KitsBrasil" component={KitsBrasil} options={{ title: "Kits de Vinhos", headerShown: false }}/>
        <Stack.Screen name="RoseBrasil" component={RoseBrasil} options={{ title: "Vinhos Rosé", headerShown: false }}/>
        <Stack.Screen name="BrancoBrasil" component={BrancoBrasil} options={{ title: "Vinhos Branco", headerShown: false }}/>
        <Stack.Screen name="TintoBrasil" component={TintoBrasil} options={{ title: "Vinhos Tinto", headerShown: false }}/>

        <Stack.Screen name="tiposUruguai" component={Uruguai} options={{ title: "Tipos de Vinhos", headerShown: false }}/>
        <Stack.Screen name="kitsUruguai" component={KitUruguai} options={{ title: "Kits de Vinhos", headerShown: false }}/>
        <Stack.Screen name="roseUruguai" component={RoseUruguai} options={{ title: "Vinhos Rosé", headerShown: false }}/>
        <Stack.Screen name="brancoUruguai" component={BrancoUruguai} options={{ title: "Vinhos Branco", headerShown: false }}/>
        <Stack.Screen name="tintoUruguai" component={TintoUruguai} options={{ title: "Vinhos Tinto", headerShown: false }}/>

        <Stack.Screen name="tiposChile" component={Chile} options={{ title: "Tipos de Vinhos", headerShown: false }}/>
        <Stack.Screen name="KitsChile" component={KitChile} options={{ title: "Kits de Vinhos", headerShown: false }}/>
        <Stack.Screen name="roseChile" component={RoseChile} options={{ title: "Vinhos Rosé", headerShown: false }}/>
        <Stack.Screen name="brancoChile" component={BrancoChile} options={{ title: "Vinhos Branco", headerShown: false }}/>
        <Stack.Screen name="tintoChile" component={TintoChile} options={{ title: "Vinhos Tinto", headerShown: false }}/>

        <Stack.Screen name="tiposArgentino" component={Argentina} options={{ title: "Tipos de Vinhos", headerShown: false }}/>
        <Stack.Screen name="kitsArgentino" component={KitArgentina} options={{ title: "Kits de Vinhos", headerShown: false }}/>
        <Stack.Screen name="roseArgentino" component={RoseArgentina} options={{ title: "Vinhos Rosé", headerShown: false }}/>
        <Stack.Screen name="BrancoArgentino" component={BrancoArgentina} options={{ title: "Vinhos Branco", headerShown: false }}/>
        <Stack.Screen name="tintoArgentino" component={TintoArgentina} options={{ title: "Vinhos Tinto", headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
  );
}

export default App;

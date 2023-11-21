import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from "react";
import { Animated, Button, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
  Animated.timing(
    fadeAnim,
    {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    },
  ).start(() => {
    setTimeout(() => {
      navigation.navigate('sobre2');
      setTimeout(() => {
        navigation.navigate('sobre3');
         setTimeout(() => {
        navigation.navigate('origem');
         }, 3000);
      }, 3000);
    }, 3000)
  });
}, [fadeAnim, navigation]);
  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

const App = ({navigation}) => (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1534655882117-f9eff36a1574?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.container}
    >
    <View style={styles.overlay} />
      <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.navigate("aviso")}>
        <Image
          source={{
            uri: 'https://icons.veryicon.com/png/o/miscellaneous/unicons/arrow-left-44.png',
          }}
          style={styles.seta}
        />
      </TouchableOpacity>
      <Text style={styles.texto}>Nossa História</Text>
      <View style={styles.imagemContainer}>
      <FadeInView style={styles.appFadein}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1602491399262-55831860b387?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imagem}
        />
        <Text style={styles.texto2}>
          A Vinno surgiu no ano de 2009, com o intuito de distribuir de forma acessível os melhores vinhos nacionais e da América Latina.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("sobre2")}>
          <Text style={styles.buttonText}>➔</Text>
        </TouchableOpacity>

        </FadeInView>
      </View>
    </ImageBackground>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagemContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  imagem: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center'
  },

  texto2: {
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: '#fff',
    margin: 20,
    justifyContent: 'center'
  },
  setaContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  seta: {
    width: 50,
    height: 60,
    right: 15,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.7)',
},
appFadein: {
    width: 300,
    height: 600,
    alignSelf: "center"
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#320000',
    padding: 5,
    width: 100,
    borderRadius: 7,
    marginBottom: 50,
    left: 200
  },
buttonText:{
    color: "white", 
    textAlign: 'center',
    fontSize: 20
  },
});

export default App;

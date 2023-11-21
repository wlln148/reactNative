import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const MinhaTelaComImagemDeFundo = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.discordapp.com/attachments/1098747461578788945/1167869659220021380/photo-1587920710219-f6f9804dc10d.png?ex=654fb260&is=653d3d60&hm=12c71e3453d9967675351262b0574e45f40ff4cf9830b7806a6d9bee6993f622&',
      }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <ImageBackground
          source={{
            uri: 'https://www.colorhexa.com/f5f2d0.png',
          }}
          style={styles.textoContainer}
        >
          <Text style={styles.texto}>
            Este aplicativo é destinado para o público maior de 18 anos. Se beber, não dirija.
          </Text>
           <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("sobre")}>
          <Text style={styles.textoBotao}>Ok</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoContainer: {
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    opacity: .8
  },
  texto: {
    fontSize: 14,
    color: '#320000',
    textAlign: 'center',
    fontWeight:'semi-bold'
  },
  botao: {
    backgroundColor: '#320000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight:'semi-bold'
  },
});

export default MinhaTelaComImagemDeFundo;

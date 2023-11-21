import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

const MinhaTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://color-hex.org/colors/540d1f.png', 
        }}
        style={styles.imagem}
      />
     <View style={styles.navibar}>
      <TouchableOpacity onPress={() => navigation.navigate("origem")}>
        <Text style={styles.texto}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("sobre")}>
        <Text style={styles.texto}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("carrinho")}>
        <Text style={styles.texto}>Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("conta")}>
        <Text style={styles.texto}>Conta</Text>
      </TouchableOpacity>
    </View>
      <View style={styles.texto2}>
        <Text style={styles.texto2}>Tipos de Vinhos</Text>
      </View>     
<View style={styles.section}>
      <View style={styles.secao}>
      <View style={styles.flexSection}>
      <TouchableOpacity onPress={() => navigation.navigate("tintoArgentino")}>
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.imagem2}
        />
        <View style={styles.overlay}/>
        <Text style={styles.textoSobreImagem}>Tinto</Text>
      </View>
       </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("roseArgentino")}>
           <View style={styles.box}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.imagem2}
        />
        <View style={styles.overlay} />
        <Text style={styles.textoSobreImagem}>Rosé</Text>
      </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("BrancoArgentino")}>
   <View style={styles.box}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1566754436893-98224ee05be4?auto=format&fit=crop&q=80&w=1475&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.imagem2}
        />
        <View style={styles.overlay} />
        <Text style={styles.textoSobreImagem}>Branco</Text>
      </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("kitsArgentino")}>
        <View style={styles.box}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1510267222691-b90c3f0494d6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.imagem2}
        />
        <View style={styles.overlay} />
        <Text style={styles.textoSobreImagem}>Kits</Text>
        </View>
        </TouchableOpacity>
         </View>
      </View>
  </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("nacionalidades")}>
  <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  imagem: {
    width: '100%',
    height: '7%',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    top: -10,
    bottom: -40,
    left: 7,
    right: 7,
    borderRadius: 10,
  },
  
  navibar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold', 
  },
  texto2: {
    color: '#320000',
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#F5F2D0',
  },
  box: {
    position: 'relative',
    justifyContent: 'center',
    height: 150,
    width: 196,
    marginTop: 70
  },
  imagem2: {
    width: 180,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  textoSobreImagem: {
    position: 'absolute',
    top: '90%',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    transform: [{ translateY: -50 }],
  },
 button: {
    alignItems: 'center',
    backgroundColor: '#320000',
    padding: 10,
    width: 150,
    borderRadius: 7,
    marginBottom: 50
  },
  flexSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
  buttonText:{
    color: "white", 
    textAlign: 'center',
    fontSize: 20
  },
   section: {
        flex: 1,
        alignItems: 'center',
    },
secao:{
}
});
export default MinhaTela;

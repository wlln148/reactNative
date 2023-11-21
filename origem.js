import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import nacionalidades from "./nacionalidades";

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
        <Text style={styles.texto2}>Vinhos</Text>
    </View> 
   <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate("tipos")}>
          <View style={styles.imagem2}>
            <Image
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1098747461578788945/1167870313854410832/photo-1621462647729-e8543be91c0e.png?ex=654fb2fc&is=653d3dfc&hm=3ce5652801364161eade247fbacc0827a849a29d6fc5a0cf1fa7c213380bcac2&'
              }}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.overlay} />
          </View>
          <Text style={styles.textoSobreImagem}>Nacionais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate("nacionalidades")}>
          <View style={styles.imagem2}>
            <Image
              source={{ 
                uri: 'https://images.unsplash.com/photo-1598152541316-921ebb5e0433?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.overlay} />
          </View>
          <Text style={styles.textoSobreImagem}>Internacionais</Text>
        </TouchableOpacity>
      </View> 
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: '100%',
    height: '7%',
    marginTop: 0, 
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
    paddingTop: 15,
    fontSize: 40,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#F5F2D0',
  },

   container2: {
    marginTop: 10, 
    position: 'relative',
    justifyContent: 'space-around',
    height: 300,
  },

  container3: {
    position: 'relative',
    justifyContent: 'space-around',
    height: 200,
    marginTop: 20

  },

  imagem2: {
  width: 350,
  height: 250,
  borderRadius: 10,
  alignSelf: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  textoSobreImagem: {
    position: 'absolute',
    top: '65%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    transform: [{ translateY: -50 }],
  },

   button: {
    alignItems: 'center',
    backgroundColor: '#320000',
    padding: 10,
    width: 150,
    borderRadius: 7,
    marginTop: 50
  },
  buttonText:{
    color: "white", 
    textAlign: 'center',
    fontSize: 15
  }
});

export default MinhaTela;

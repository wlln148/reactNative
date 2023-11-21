import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const RoseChile = ({ navigation }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (product) => {
  const newProduct = { ...product, quantidade: 1};
  const newCart = [...cart, newProduct];
  setCart(newCart);
};


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
      <TouchableOpacity onPress={() => navigation.navigate("MinhaTela")}>
        <Text style={styles.texto}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("carrinho")}>
        <Text style={styles.texto}>Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("conta")}>
        <Text style={styles.texto}>Conta</Text>
      </TouchableOpacity>
    </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Rose</Text>
        <View style={styles.wineContainer}>
          <Image
            source={{
              uri: 'https://www.grandcru.com.br/media/catalog/product/cache/8d08538132235aee2ff50a612624b1c3/1/0/1000019413-standing-front.png', 
            }}
            style={styles.wineImage}
          />
          <Text style={styles.wineText}>Tramari Rosé di Primitivo Salento IGP 2022 750Ml</Text>
          <Text style={styles.winePrice}>R$222,33</Text>
          <TouchableOpacity style={styles.button} onPress={() => addToCart({nome: 'Tramari Rosé di Primitivo Salento IGP 2022 750Ml', preco: 222.23, image: 'https://www.grandcru.com.br/media/catalog/product/cache/8d08538132235aee2ff50a612624b1c3/1/0/1000019413-standing-front.png'})}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.wineContainer}>
          <Image
            source={{
              uri: 'https://www.grandcru.com.br/media/catalog/product/cache/8d08538132235aee2ff50a612624b1c3/i/t/itvis0809a21-prosecco-doc-brut-rose_-millesimato-_il-fresco_.png', 
            }}
            style={styles.wineImage}
          />
          <Text style={styles.wineText}>Il Fresco Prosecco DOC Rosé Millesimato 2021 750Ml</Text>
          <Text style={styles.winePrice}>R$103,22</Text>
          <TouchableOpacity style={styles.button} onPress={() => addToCart({nome: 'Il Fresco Prosecco DOC Rosé Millesimato 2021 750Ml', preco: 103.22, image: 'https://www.grandcru.com.br/media/catalog/product/cache/8d08538132235aee2ff50a612624b1c3/i/t/itvis0809a21-prosecco-doc-brut-rose_-millesimato-_il-fresco_.png'})}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        </View>

         <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("tiposChile")}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#F5F2D0',
  },

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
  title: {
    color:'#320000',
    fontWeight: 'bold',
    paddingTop: 15,
    fontSize: 40,
    justifyContent: 'center',
    alignSelf: 'center'

  },
  wineContainer: {
    width: '100%',
    backgroundColor: '#F5F2D0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,

  },
  wineImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  wineText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  winePrice: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#320000',
    padding: 10,
    width: 150,
    borderRadius: 7,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  button2: {
    backgroundColor: '#320000',
    padding: 10,
    width: 150,
    borderRadius: 7,
    marginTop: 0,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center'
  },
});

export default RoseChile;
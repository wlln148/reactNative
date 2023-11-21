import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { CartContext } from './CartContext';
import ItemCarrinho from './ItemCarrinho'; 

const MinhaTela = ({ navigation }) => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const handleQuantidadeChange = (diferenca, product) => {
  setTotal(totalAnterior => Math.max(0, totalAnterior + diferenca ));
};

const handleRemove = (product) => {
  const index = cart.findIndex(item => item === product);
  if (index !== -1) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  
    const newTotal = newCart.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    setTotal(newTotal);
  }
};



  return (
    
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("origem")}>
          <Image 
            source={{uri: 'https://cdn.discordapp.com/attachments/1043293201055883266/1169770914783711283/16a4de7dfa1fbc2b74cab50512f69718.png?ex=65569d0f&is=6544280f&hm=9b90f414ac59c87af5b073de30e9aa04f41738cc57626a04f38b207859b084d8&'}} 
            style={styles.imagem} />
        </TouchableOpacity>
        <Text style={styles.texto2}>Carrinho</Text>
      </View>
      <View style={styles.linha} />  
      {cart.map((product, index) => (
      <ItemCarrinho key={index} product={product} onQuantidadeChange={(diferenca) => handleQuantidadeChange(diferenca, product)} onRemove={() => handleRemove(product)} />
    ))}
      <Text style = {styles.total}>Total do Carrinho: R${total.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
  width: 40, 
  height: 40, 
  marginRight: 10, 
  marginTop: 30,
},

texto2: {
  color: '#320000',
  fontWeight: 'bold',
  paddingRight: 130,
  marginTop: 30,
  fontSize: 30,
  fontStyle: 'italic',
  },
   container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#F5F2D0',
  },
   linha: {
    height: 1,
    width: '100%',
    backgroundColor: '#000', 
    marginVertical: 10
  },
 button: {
    alignSelf: 'center',
    backgroundColor: '#320000',
    padding: 10,
    width: 220,
    borderRadius: 7, 
    marginTop: 20
  },
   buttonText:{
    color: "white", 
    textAlign: 'center',
    fontSize: 15
  },
  total: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
});
export default MinhaTela;

import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ItemCarrinho = ({ product, onQuantidadeChange, onRemove }) => {
  const [quantidade, setQuantidade] = useState(1);
  const [totalItem, setTotalItem] = useState(product.preco);

  useEffect(() => {
   const novoTotalItem = quantidade > 0 ? quantidade * product.preco : 0;
    onQuantidadeChange(novoTotalItem - totalItem);
    setTotalItem(novoTotalItem);
  }, [quantidade, onQuantidadeChange, product.preco, totalItem]);

  return (
    <View style={styles.item}>
      <Image 
        source={{uri: product.image}} 
        style={styles.imagem2}
      />
      <View style={styles.descricaoItem}>
        <Text style={styles.itemNome}>{product.nome}</Text>
        <Text style={styles.itemPreco}>R$ {product.preco.toFixed(2)}}</Text>
        <Text style={styles.itemTotal}>Total: R$ {totalItem-product.preco}</Text>
        <View style={styles.quantidade}>
          <Button style={styles.btnMenor} color = "#320000" title="-" onPress={() => setQuantidade(Math.max(1, quantidade - 1))} />
          <Text style={styles.quantidades}>{quantidade-1}</Text>
          <Button style={styles.btnMenor} color= "#320000" title="+" onPress={() => setQuantidade(quantidade + 1)} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
    <Text style={styles.buttonText}>Remover</Text>
  </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   imagem2: {
    width: screenWidth * 0.2, 
  height: screenHeight * 0.2, 
  marginRight: 10,
  marginTop: 20
  },
   item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
   descricaoItem: {
    flexDirection: 'column'
  },
   quantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  itemNome: {
    fontSize: screenWidth * 0.04, 
    marginBottom: 5
  },

button: {
    alignItems: 'center',
    backgroundColor: '#320000',
    padding: 10,
    width: 150,
    borderRadius: 7, 
    marginTop: 20

  },
   buttonText:{
    color: "white", 
    textAlign: 'center',
    fontSize: 15
   },

  itemPreco: {
    fontSize: 18,
    marginBottom: 5

  },

  itemTotal: {
    fontSize: 20,
  },

  quantidades: {
     fontSize: 20
  },
});

export default ItemCarrinho;

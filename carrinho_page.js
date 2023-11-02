import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const ItemCarrinho = ({ nome, preco, onQuantidadeChange }) => {
  const [quantidade, setQuantidade] = useState(1);
  const [totalItem, setTotalItem] = useState(preco);
  useEffect(() => {
    const novoTotalItem = quantidade * preco;
    onQuantidadeChange(novoTotalItem - totalItem);
    setTotalItem(novoTotalItem);
  }, [quantidade]);
  return (
    <View style={styles.item}>
      <Image 
        source={{uri: 'https://cdn.discordapp.com/attachments/1043293201055883266/1169770886937718784/23512746481156e46156550bed72d491.png?ex=65569d08&is=65442808&hm=eaabfacf5a4eb1ba024bac331375171c325a0666c19d41f6bcdf0232ae16ee57&'}}
        style={styles.imagem2}
      />
     <View style={styles.descricaoItem}>
        <Text style={styles.itemNome}>{nome}</Text>
        <Text style={styles.itemPreco}>R$ {preco}</Text>
        <Text style={styles.itemTotal}>Total: R$ {totalItem-preco}</Text>
        <View style={styles.quantidade}>
          <Button style={styles.btnMenor} color = "#320000" title="-" onPress={() => setQuantidade(Math.max(0, quantidade - 1))} />
          <Text style={styles.quantidades}>{quantidade-1}</Text>
          <Button style={styles.btnMenor} color= "#320000" title="+" onPress={() => setQuantidade(quantidade + 1)} />
        </View>
      </View>
    </View>
  );
};
const MinhaTela = () => {
  const [total, setTotal] = useState(0);
  const handleQuantidadeChange = (diferenca) => {
    setTotal(totalAnterior => totalAnterior + diferenca);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            source={{uri: 'https://cdn.discordapp.com/attachments/1043293201055883266/1169770914783711283/16a4de7dfa1fbc2b74cab50512f69718.png?ex=65569d0f&is=6544280f&hm=9b90f414ac59c87af5b073de30e9aa04f41738cc57626a04f38b207859b084d8&'}} 
            style={styles.imagem}
          />
        </TouchableOpacity>
        <Text style={styles.texto2}>Carrinho</Text>
      </View>
      <View style={styles.linha} />  
      <ItemCarrinho nome="Vinho XYZ" preco={150} onQuantidadeChange={handleQuantidadeChange} />
      {}
      <View style={{ height: 20}} />
      <ItemCarrinho nome="Vinho XYZ" preco={150} onQuantidadeChange={handleQuantidadeChange} />
      {}
      <View style={{ height: 20 }} />
      <ItemCarrinho nome="Vinho XYZ" preco={150} onQuantidadeChange={handleQuantidadeChange} />
      <Text style = {styles.total}>Total do Carrinho: R${total}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
 header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
texto2: {
  color: '#320000',
  fontWeight: 'bold',
  paddingRight: 130,
  fontSize: 30,
  fontStyle: 'italic',
},
  imagem: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
  },
   imagem2: {
    width: 150, 
    height: 150, 
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
    alignItems: 'center',
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
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },
  itemNome: {
    fontSize: 25, 
    marginBottom: 5
  },

  itemPreco: {
    fontSize: 25,
    marginBottom: 5

  },

  itemTotal: {
    fontSize: 20,
  },

  quantidades: {
     fontSize: 20
  },

});
export default MinhaTela;

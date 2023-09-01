import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
        <Text style={styles.titulo}>Cardápio</Text>
      <StatusBar style="auto" />
      <View style = {styles.colunas}>
      <Image style = {styles.imagens} source={{uri: 'https://images.vexels.com/media/users/3/254175/isolated/lists/a48a40750d69b9425437c87ea95fca2f-desenho-animado-de-batatas-fritas.png',}}></Image>
      <Image style = {styles.imagens} source={{uri: 'https://storage.googleapis.com/grandchef-apps/gc6683/images/products/60e9d20e004bf.png',}}></Image>
    </View>
    <Text style={styles.titulo1}>🍔  Venha experimentar o melhor hambúrguer da cidade! 🍟</Text>
    <Text style = {styles.vindas}>Na nossa hamburgueria,  oferecemos deliciosos hambúrgueres simples,{'\n'}feitos com carne de alta qualidade ingredientes frescos.{'\n'}{'\n'}E para acompanhar, nossas batatas fritas {'\n'}crocantes são imperdíveis!
    Não perca mais tempo, {'\n'}{'\n'}venha nos visitar e experimentar nossas delícias. {'\n'}{'\n'}   Estamos esperando por você! 😋</Text>
    </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2B705',
    alignItems: 'center',
  
  },
  titulo:{
    marginTop:90,
    fontSize:50,
    color: '#D96704',
    fontWeight  : 'bold'

  },
  titulo1:{
    marginTop:30,
    fontSize:20,
    color: '#D96704',
    fontWeight  : 'bold',
   textAlign: 'center',
   alignItems: 'center',
   marginBottom:30,
   
  },
  
  imagens:{
    marginTop:30,
    width:180,
    height:200,
    marginLeft:5,
    marginRight:5
  },
  colunas:{
    flexDirection:'row',
  },

 vindas:{
  fontSize:20, 
  fontStyle:"italic",
alignItems:'center',
textAlign:'center', 
  color:'green',
 }
  
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from './component/Header';
import Product from './component/Product';

const App = () => {
  const product = [
   
   
    {
      id: 3,
      name: 'samsung',
      color: 'white',
      price: 26000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {product.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

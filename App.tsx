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
      id: 1,
      name: 'Redmi Not 8Pro',
      color: 'Black',
      price: 22000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
    {
      id: 2,
      name: 'Samsung',
      color: 'White',
      price: 32000,
      image:
        'https://www.iconpacks.net/icons/1/free-smartphone-icon-695-thumb.png',
    },
    {
      id: 3,
      name: 'Realmi',
      color: 'Black',
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

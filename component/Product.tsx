import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from './Redux/Constants';

interface ProductProps {
  item: {
    id: number;
    name: string;
    price: number;
    color: string;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({item}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({type: ADD_TO_CART, payload: item});
    console.log(item, 'added to cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>Price: {item.price}</Text>
      <Text style={styles.text}>Color: {item.color}</Text>
      <Image style={styles.image} source={{uri: item.image}} />
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    padding: 5,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Product;

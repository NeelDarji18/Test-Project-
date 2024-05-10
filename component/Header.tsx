import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 8,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 30,
    color: 'white', // Text color
  },
});

export default Header;

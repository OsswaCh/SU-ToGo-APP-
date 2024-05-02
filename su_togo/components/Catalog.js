// Catalog.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CatalogItem = ({ item }) => {
  return (
    <View style={styles.catalogItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`$${item.price}`}</Text>
    </View>
  );
};

const Catalog = ({ items }) => {
  return (
    <View style={styles.catalogContainer}>
      {items.map((item) => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  catalogContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  catalogItem: {
    width: 150,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

export default Catalog;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CatalogItem = ({ item, onPressAdd, counter }) => {
  return (
    <View style={styles.catalogItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`${item.price} E£`}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.subtractButton} onPress={() => onPressAdd(item, -1)}>
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => onPressAdd(item, 1)}>
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Catalog = ({ items }) => {
  const [counters, setCounters] = React.useState({});

  const handlePressAdd = (item, increment) => {
    const newCounters = { ...counters };
    newCounters[item.id] = (newCounters[item.id] || 0) + increment;
    setCounters(newCounters);
  };

  return (
    <View style={styles.catalogContainer}>
      {items.map((item) => (
        <CatalogItem
          key={item.id}
          item={item}
          onPressAdd={handlePressAdd}
          counter={counters[item.id] || 0}
        />
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
    height: 250, // Increased height to accommodate the button
    backgroundColor: 'lightgray',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    position: 'relative', // Needed for positioning the button
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addButton: {
    backgroundColor: 'grey',
    width: 25,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 1,
  },
  subtractButton: {
    backgroundColor: 'grey',
    width:25 ,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
  },
  counter: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 5,
  },
  counterButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Catalog;

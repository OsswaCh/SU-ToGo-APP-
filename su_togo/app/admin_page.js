import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const initialOrders = [
  { id: 1, customer: 'John Doe', items: ['Product A', 'Product B'], total: 50.99 },
  { id: 2, customer: 'Jane Smith', items: ['Product C', 'Product D', 'Product E'], total: 85.75 },
  { id: 3, customer: 'Alice Johnson', items: ['Product F'], total: 20.50 },
];

const AdminPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleDeleteItem = (itemId) => {
    // Remove the item with the given ID from the orders array
    setOrders(prevOrders => prevOrders.filter(order => order.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.order}>
      <Text style={styles.orderText}>Order ID: {item.id}</Text>
      <Text style={styles.orderText}>Customer: {item.customer}</Text>
      <Text style={styles.orderText}>Items: {item.items.join(', ')}</Text>
      <Text style={styles.orderText}>Total: ${item.total.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back button */}
      <View style={styles.back_button_view}>
        <Link href="/" style={styles.back_button_text}>
          <Image source={require('../assets/back_Icon.png')} style={[styles.titleImage, { width: 20, height: 20 }]} />
        </Link>
      </View>
      <Text style={styles.title}>Current Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.orderList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderList: {
    width: '100%',
  },
  order: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  back_button_view: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  back_button_text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    opacity: 1,
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
});

export default AdminPage;
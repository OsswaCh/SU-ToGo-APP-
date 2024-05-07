// AdminPage.js

import React from 'react';
import { Link } from 'expo-router';

import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
  { id: 1, customer: 'John Doe', items: ['Product A', 'Product B'], total: 50.99 },
  { id: 2, customer: 'Jane Smith', items: ['Product C', 'Product D', 'Product E'], total: 85.75 },
  { id: 3, customer: 'Alice Johnson', items: ['Product F'], total: 20.50 },
];

const AdminPage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.order}>
      <Text style={styles.orderText}>Order ID: {item.id}</Text>
      <Text style={styles.orderText}>Customer: {item.customer}</Text>
      <Text style={styles.orderText}>Items: {item.items.join(', ')}</Text>
      <Text style={styles.orderText}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
        
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
});

export default AdminPage;

import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ShopContext } from './shop_context';
import { initialOrders } from '../data/initialOrders';

const AdminPage = () => {
  //const [orders, setOrders] = useState(initialOrders);
  const {password, setPassword, enteredPassword, setEnteredPassword, orders, setOrders,  counters,setCounters,takingorders,settakingorders} = useContext(ShopContext);
  const handleDeleteItem = (itemId) => {
    // Remove the item with the given ID from the orders array
    setOrders(prevOrders => prevOrders.filter(order => order.id !== itemId));
  };
  const StoptakingOrders =() => {
    settakingorders(false);
    console.log("Not Taking Orders");
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
      <TouchableOpacity style={styles.payment_options_buttons} onPress={StoptakingOrders}/*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> Stop Taking Orders </Text>
      </TouchableOpacity>
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
  payment_options_buttons: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "40%",
    backgroundColor: '#D9D9D966',
    height: 60,
    marginBottom: 25,
    borderRadius: 30,
    
  },
  payment_options_butttons_text:
  {
    fontFamily: "Inter",
    fontWeight: 500,
  },
});

export default AdminPage;
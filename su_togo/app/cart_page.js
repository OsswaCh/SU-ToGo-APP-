import React from 'react';
import { useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { catalogItems } from '../data/Catalog_items';
import { ShopContext } from './shop_context';


export default function Page() {
    const {password, setPassword, enteredPassword, setEnteredPassword, orders, setOrders,  counters,setCounters} = useContext(ShopContext);
    //JSON.parse(counters)
    //console.log(counters)
  return (
    <>
        <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
            <SafeAreaView style={styles.container}>
                <View style={styles.back_button_view}>
                    <Link href="/store_page" style={styles.back_button_text}>
                    <Image source={require('../assets/back_Icon.png')} style={{ width: 20, height: 20 }}/>
                    Back
                    </Link>
                </View>
                <View>
                    <Link href="/checkout_page">
                        Check Out Page
                    </Link>
                </View>
            </SafeAreaView>
        </ScrollView>
        
        
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height:"100%"
  },
  scrollView_Contstyl: 
  {
    justifyContent: "space-between",
    height: "100%",
  },
  scrollViewMain: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  headercontainer: {
    //marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width:"100%",
    maxHeight: 330,
    alignItems: "center",
    objectFit: "fill"
  },
  back_button_view: 
  {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    display: "flex",
    alignItems: "center",
    width: 20,
    maxHeight: 20,
    flexDirection: "row"
  },
  back_button_text: 
  {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    display: "flex",
    alignItems: "center",
    width: 20,
    maxHeight: 20,
    flexDirection: "row",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 500,
    
  },
});
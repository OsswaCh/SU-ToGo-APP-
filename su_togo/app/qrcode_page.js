import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';
import { ShopContext } from './shop_context';
import { useContext } from 'react';

export default function Page() {
    const {password, setPassword, enteredPassword, setEnteredPassword, orders, setOrders,  counters,setCounters} = useContext(ShopContext);
    //We can have the qr codes hold the order values maybe?
  return (
    <>
        <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
            <SafeAreaView style={styles.container}>
                <View style={styles.back_button_view}>
                    <Link href="/checkout_page" style={styles.back_button_text}>
                    <Image source={require('../assets/back_Icon.png')} style={[styles.titleImage, { width: 20, height: 20 }]}/>
                    Back
                    </Link>
                </View>
                <View style={styles.store_logo_view}>
                    <Image source={require('../assets/market_logo.png')} style={[styles.titleImage, { width: 150, height: 150 }]}/>      
                </View>
                <View style={styles.headercontainer}>
                    <QRCode value="Purchase Successful" size={150}/>
                </View>
                <View style={{height: 300,textAlign: "center", alignItems: "center"}}>
                    <Text style={{textAlign: "center", marginBottom: 20, fontFamily: "Inter", fontWeight: 700, fontSize: 24,}}>
                        Payment {"\n"}
                        Successful!
                    </Text>
                    <Text style={{textAlign: "center", marginBottom: 20, fontFamily: "Inter", fontWeight: 500, fontSize: 14, width: 300}}>
                        Your order will be ready for you in locker 1 as soon as 9:56 and will be cancelled by 10:56 if not retrieved
                    </Text>
                    <Text style={{textAlign: "center", marginBottom: 20, fontFamily: "Inter", fontWeight: 500, fontSize: 14, width: 300}}>
                        Approach the locker and tap the “Open” button to retrieve your items
                    </Text>
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
  store_logo_view: 
  {
    backgroundColor: '#FFFFFF',
    width:"100%",
    maxHeight: 140,
    alignItems: "center",
    objectFit: "fill"
  },
});
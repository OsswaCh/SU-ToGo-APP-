import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Button, Alert, Text } from 'react-native';
import { Link,useNavigation } from 'expo-router';
import { ShopContext } from './shop_context';
export default function Page() {
  //const [password, setPassword] = useState('123');
  //const [enteredPassword, setEnteredPassword] = useState('');
  const navigation = useNavigation();
  const {password, setPassword, enteredPassword, setEnteredPassword, orders, setOrders,  counters,setCounters,takingorders,settakingorders} = useContext(ShopContext);
  const handleLogin = () => {
    if (enteredPassword === password) {
      // Navigate to admin page
      navigation.navigate('admin_page');
    } else {
      // Show an alert for incorrect password
      Alert.alert('Invalid Password', 'Please enter the correct password.');
    }
  };
  return (
    <>
      <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
        <SafeAreaView style={styles.container}>
            <View style={styles.headercontainer}>
                <Image
                  source={require('../assets/student_union_logo.png')}
                  style={[styles.titleImage, { borderRadius: 10, width: 300, height: 260 }]}
                />
                <Image
                  source={require('../assets/frontpage.png')}
                  style={[styles.titleImage, { borderRadius: 10, width: 250, height: 60 }]}
                />
            </View> 
            <View style={styles.box}>
              <TouchableOpacity style={styles.link}>
                {/* <Link href="/store_page" style={styles.linkText} onPress={handleNotAllowedtoShop}>
                  Start Shopping
                </Link> */}
                {takingorders ? (
                    <Link href="/store_page" style={styles.linkText}>
                      Start Shopping
                    </Link>
                  ) : (
                    <Text style={styles.text}>Shopping is currently not available</Text>
                  )}
              </TouchableOpacity>
            </View>
            {/* <View style={styles.box}>
              <TouchableOpacity style={styles.link}>
                <Link href="/checkout_page" style={{color: "black",fontSize: 16,fontWeight: '500',fontFamily: "Inter", width: "100%", height: "100%", alignContent:"center", textAlign: "center" }}>
                  Check out Page
                </Link>
              </TouchableOpacity>
            </View> */}
            {/* Password input */}
            <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry={true}
              value={enteredPassword}
              onChangeText={text => setEnteredPassword(text)}
            />

            {/* Login button */}
            <TouchableOpacity onPress={handleLogin} style={{alignItems: "center", width: "50%", height: 50, backgroundColor: "#D9D9D966", borderRadius: 30, justifyContent: "center"}}>
              <Text style={{color: "black",fontSize: 12,fontWeight: '500',fontFamily: "Inter", width: "100%", height: "100%", alignContent:"center", textAlign: "center" }}>Admin</Text>
            </TouchableOpacity>

            {/* Other links */}
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
    justifyContent: "space-evenly",
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
  headercontainer_box: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  link: {
    color: 'black', // Link color
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight
    fontFamily: "Inter",
    width: "100%",
    height: "100%",
    borderRadius: 30, 
  },
  titleImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    opacity: 1,
  },
  input: {
    color: 'black', // Link color
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight
    fontFamily: "Inter",
    height: 70,
    width: '80%',
    margin: 20,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 30,
    //padding: 10,

  },
  password:
  {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 200,
    alignItems: "center",
    //justifyContent: "space-between"

  },

  box: {
    flexDirection: 'row', // Align items horizontally
    width: '80%',
    height: 70,
    backgroundColor: '#D9D9D966',
    margin: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
  },
  link: {
    color: 'black', // Link color
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight
    fontFamily: "Inter",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
  },
  linkText: {
    color: 'black', // Text color
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight
    fontFamily: "Inter", 
    width: "100%",
    height: "100%",
    alignContent:"center", 
    textAlign: "center"

  },
});

import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert } from 'react-native';
import { catalogItems } from '../data/Catalog_items';
import Catalog from '../components/Catalog'; 
import { ShopContext } from './shop_context';

  //COUNTERS + ITEMS to CART
// Sample catalog data
// const catalogItems = [
//   { id: 1, name: 'RedBull ', price: 30, image: require('../assets/redBullRed.jpg') },
//   { id: 2, name: 'Molto', price: 15, image: require('../assets/molto.jpg') },
//   { id: 3, name: 'Water 50ml', price: 1, image: require('../assets/waterBottle.jpg') },
//   { id: 4, name: 'Chips', price: 15, image: require('../assets/chips.jpg')},
//   { id: 5, name: 'Item 5', price: 50.99, image: PlaceholderImage},
//   { id: 6, name: 'Item 6', price: 60.99, image: PlaceholderImage},
//   { id: 7, name: 'Item 7', price: 70.99, image: PlaceholderImage},
// ];
// //[]
export default function App() {
  const [text, onChangeText] = useState('What are you craving today?');
  //const [counters, setCounters] = useState({});
  const {password, setPassword, enteredPassword, setEnteredPassword, orders, setOrders,  counters,setCounters} = useContext(ShopContext);
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewMain}>
        <SafeAreaView style={styles.container}>
          <StatusBar style='light' />


          <View style={styles.back_button_view}>
            <Link href="/" style={styles.back_button_text}>
            <Image source={require('../assets/back_Icon.png')} style={[styles.titleImage, { width: 20, height: 20 }]}/>
            Back
              </Link>
          </View>
        
          
          <View style={styles.headercontainer}>
            
            <View style={styles.headercontainer_box}>
            <Image
                  source={require('../assets/sutogo.png')}
                  style={[styles.titleImage, { borderRadius: 10 }]}
                />
              
            </View>
          </View>
          <View style={styles.headercontainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          
          
          <View style={styles.headercontainer}>
            <ScrollView
              style={styles.scrollView}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollView_contcontain}
            >  
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('../assets/redBull.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Energy Drinks
                </Text>
              </View>
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('../assets/softDrink.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Soft Drinks
                </Text>
              </View>
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('../assets/water.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Water
                </Text>
              </View>
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('../assets/molto.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Sweet
                </Text>
              </View>
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('../assets/chips.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Salty
                </Text>
              </View> 
            </ScrollView>
          </View>

        <View>
          <Text style={styles.Subtitle}>
            Popular Items
          </Text>

        </View>

        <View style={styles.headerContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            <Catalog items={catalogItems} counters={counters} setCounters={setCounters} />
          </ScrollView>
        </View>
            <View style={styles.container}>
            <View style={styles.blueBox}>
            <Link href="/cart_page" style={styles.checkoutLink}>Check out Page</Link>
        </View>
        </View>
        
        </SafeAreaView>

        
      </ScrollView>

      
      
      {/* <View style={styles.headercontainer_bot}>
        <Text>CART</Text>
        <Text>PROFILE</Text>
      </View> */}
      
    </>
  );
}

const styles = StyleSheet.create({

  
  headerContainer: {
    width: '100%', // Ensure the container takes full width
    backgroundColor: '#f0f0f0', // Set background color
    paddingVertical: 10, // Add vertical padding
  },
  scrollViewContent: {
    paddingHorizontal: 20, // Add horizontal padding
    alignItems: 'center', // Center items horizontally
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  headercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    boarderRadius: 10,
    width: "100%",
  },
  headercontainer_mid: {
    display: "flex",
    flexDirection: "row",
    boarderRadius: 10,
    justifyContent: "space-around",
    width: "50%",
  },
  headercontainer_bot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    bottom: 0,
    boarderRadius: 10,
    position: "absolute"
  },
  headercontainer_noflex: {
    width: "100%",
    alignItems: "center",
  },
  headercontainer_box: {
    //backgroundColor: "red",
    flex: 1,
    maxWidth: 500,
    alignItems: "center",
    padding: 10,
  },

  Subtitle :{
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    backgroundColor: "#d5d5d54a"
  },
  scrollView: {
    backgroundColor: '#d5d5d54a',
    marginHorizontal: 20,
    height: 150,
  },
  scrollViewMain: {
    height: "100%",
  },
  
  scrollView_View: {
    margin: 10,
    backgroundColor: "rgba(0, 0, 255, 0.5)", 
    borderRadius: 4,
    height: 100,
    justifyContent: "flex-end",
  },
  scrollView_contcontain: {
    alignItems: "center",

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.7, 
    borderRadius: 10,
    zIndex: -1
  },
  titleImage: {
    width: 300,
    height:50,
    resizeMode: 'contain',
    borderRadius: 10,
    opacity: 1,
  },

  back_button_view: 
  {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    display: "flex",
    alignItems: "center",
    width: 20,
    maxHeight: 20,
    flexDirection: "row",
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

  catalogScrollView: {
    backgroundColor: '#d5d5d54a',
    marginHorizontal: 20,
    height: 150,
  },
  catalogScrollViewContent: {
    alignItems: 'center',
  },
  catalogItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  blueBox: {
    backgroundColor: '#040d1f', 
    padding: 17, 
    borderRadius: 5,
    alignItems: 'center', 
    height: 55,
    width: 250
  },
  checkoutLink: {
    color: 'white',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },

});
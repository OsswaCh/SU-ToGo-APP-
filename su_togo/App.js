import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Button, Image } from 'react-native';

import Catalog from './components/Catalog'; 
import Button2 from './components/Button';
import ImageViewer from './components/ImageViewer';
import { Subtitle } from 'native-base';

const PlaceholderImage = require('./assets/favicon.png');
  
// Sample catalog data
const catalogItems = [
  { id: 1, name: 'Item 1', price: 10.99, image: PlaceholderImage },
  { id: 2, name: 'Item 2', price: 20.99, image: PlaceholderImage },
  { id: 3, name: 'Item 3', price: 30.99, image: PlaceholderImage },
  { id: 4, name: 'Item 4', price: 40.99, image: PlaceholderImage},
  { id: 5, name: 'Item 5', price: 50.99, image: PlaceholderImage},
  { id: 6, name: 'Item 6', price: 60.99, image: PlaceholderImage},
  { id: 7, name: 'Item 7', price: 70.99, image: PlaceholderImage},
];

export default function App() {
  const [text, onChangeText] = useState('What are you craving today?');
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewMain}>
        <SafeAreaView style={styles.container}>
          <StatusBar style='light' />

          <View style={styles.headercontainer}>
            
            <Button
              title="Log Out"
              onPress={() => Alert.alert('You will log out now!')}
            />
            <Button
              title="Profile"
              
            />
          </View>
          
          <View style={styles.headercontainer}>
            
            <View style={styles.headercontainer_box}>
            <Image
                  source={require('./assets/sutogo.png')}
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
                  source={require('./assets/redBull.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Energy Drinks
                </Text>
              </View>
              
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('./assets/softDrink.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Soft Drinks
                </Text>
              </View>

              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('./assets/water.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Water
                </Text>
              </View>
              
              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('./assets/molto.jpg')}
                  style={[styles.image, { borderRadius: 10 }]}
                />
                <Text style={{ padding: 10, color: 'white' }}>
                  Sweet
                </Text>
              </View>

              <View style={[styles.scrollView_View, { width: 100 }]}>
                <Image
                  source={require('./assets/chips.jpg')}
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


        <View style={styles.headercontainer}>
            {/* Catalog Component */}
            <Catalog items={catalogItems} />
        </View>
        
        </SafeAreaView>
        
      </ScrollView>
      
      <View style={styles.headercontainer_bot}>
        <Text>CART</Text>
        <Text>PROFILE</Text>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
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
    width: "100%",
  },
  headercontainer_mid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  headercontainer_bot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    bottom: 0,
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



});

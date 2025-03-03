import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity ,TextInput} from 'react-native';
import { Link } from 'expo-router';
import { catalogItems } from '../data/Catalog_items';
import { ShopContext } from './shop_context';

export default function Page() {
    const [name, setName] =useState([]);
    const { counters } = useContext(ShopContext);
    const [text, onChangeText] = useState('Any Comments?');

    const getImageForItem = (itemId) => {
      // Logic to retrieve image for item based on its ID
      switch (itemId) {
          case '1':
              return require('../assets/redBull.jpg');
          case '2':
              return require('../assets/molto.jpg');
          case '3':
              return require('../assets/water.jpg');
          case '4': 
              return require('../assets/chips.jpg') 
          
          default:
              return require('../assets/favicon.png');
      }
  };
  
  const getItemName = () => {
    console.log('Catalog Items:', catalogItems);
    Object.keys(counters).forEach(key => {
        const firstKey = key; // Get the first key of the counter object
        const matchedItem = catalogItems.find(item => item.id === parseInt(firstKey)); // Parse the key to integer before comparison
        console.log('First entry name:', firstKey);
        if (matchedItem) {
          console.log(matchedItem);
          if(matchedItem.name)
          {
            console.log(matchedItem.name)
            console.log(name);
            setName((prev) => [...prev, matchedItem.name]);
            //setName([...name,matchedItem.name]);
            console.log(name);
          }
        }
    });
};
useEffect(() => {
    // Function to run on component mount (page load)
    console.log('Page loaded');
    // Call your function here
    getItemName();
  },[]);

    return (
        <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
            <SafeAreaView style={styles.container}>
                <View style={styles.back_button_view}>
                    <Link href="/store_page" style={styles.back_button_text}>
                        <Image source={require('../assets/back_Icon.png')} style={{ width: 20, height: 20 }}/>
                        Back
                    </Link>
                </View>
                

                {/* Display counters */}
                <View style={styles.countersContainer}>
                  <Text style={styles.countersTitle}>Items in Cart:</Text>
                    {counters && Object.keys(counters).map((itemId, iterator) => (
                      
                      <View key={itemId} style={styles.counterItem}>
                      <Image source={getImageForItem(itemId)} style={styles.itemImage} />
                      <View style={styles.itemDetails}>
                          <Text style={styles.itemName}>{`Name: ${name[iterator]}`}</Text>

                          <Text style={styles.itemQuantity}>{`Quantity: ${counters[itemId]}`}</Text>
                      </View>
                  </View>
                    ))}
                </View>
                <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
                <TouchableOpacity style={styles.checkout_button_button}>
                
                    <Link href="/checkout_page" style={styles.checkout_text}>Check Out Page</Link>
                
                </TouchableOpacity>


            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

  checkout_text:
  {
    height: 60, 
    width: 200, 
    alignContent: "center", 
    textAlign: "center",
    color:"white",
    backgroundColor: '#000000',
    borderRadius: 30,
    fontWeight: 200, fontFamily: "Inter",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    backgroundColor: "#d5d5d54a"
  },
  checkout_button_view: 
  {
    //backgroundColor: 'pink',
    flex: 1,
    width: "100%",
    alignItems: "center",
    maxHeight: 200,
    justifyContent: "center",
    minHeight: 70,

  },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100%",
 
    },
    scrollView_Contstyl: {
        justifyContent: "space-between",
        height: "100%",
    },
    scrollViewMain: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    back_button_view: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        display: "flex",
        alignItems: "center",
        width: 20,
        maxHeight: 20,
        flexDirection: "row"
    },
    back_button_text: {
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
    countersContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        width: "60%",
        borderRadius: 10,
        padding: 20,
        paddingHorizontal:20,

    },
    countersTitle: {
        fontSize: 27,
        paddingBottom: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    counterItem: {
      flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 20,
  },
  itemImage: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 8,
  },
  itemDetails: {
      flexDirection: 'column', 
  },
  itemName: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  itemQuantity: {
      fontSize: 14,
      fontWeight: 'normal',
  }, 

});

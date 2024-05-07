import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Header container */}
      <View style={styles.headercontainer}>
        <View style={styles.headercontainer_box}>
          <Image
            source={require('../assets/sutogo.png')}
            style={[styles.titleImage, { borderRadius: 10 }]}
          />
        </View>
      </View>

      
      <View style={styles.box}>
        <Link href="/store_page" style={styles.link}>Store Page</Link>
      </View>
      
      <View style={styles.box}>
        <Link href="/checkout_page" style={styles.link}>Check out Page</Link>
      </View>

      <View style={styles.box}>
        <Link href="/admin_page" style={styles.link}>admin</Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headercontainer: {
    width: '80%',
    marginBottom: 20,
  },
  headercontainer_box: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  box: {
    flexDirection: 'row', // Align items horizontally
    width: '80%',
    height: '15%',
    backgroundColor: '#040d1f', 
    padding: 10, 
    borderRadius: 5, 
    marginVertical: 10,
    alignItems: 'center', 
    justifyContent: 'center', // Center items horizontally
  },
  link: {
    color: 'white', // Link color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Font weight
    fontFamily: "Inter",
  },
  titleImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    opacity: 1,
  },
});

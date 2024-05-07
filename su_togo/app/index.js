import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';
import { Link, useNavigation } from 'expo-router';

export default function Page() {
  const [password, setPassword] = useState('123');
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigation = useNavigation();

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

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={enteredPassword}
        onChangeText={text => setEnteredPassword(text)}
      />

      {/* Login button */}
      <Button title="Admin Login" onPress={handleLogin} />

      {/* Other links */}
      <View style={styles.box}>
        <Link href="/store_page" style={styles.link}>Store Page</Link>
      </View>
      
      <View style={styles.box}>
        <Link href="/checkout_page" style={styles.link}>Check out Page</Link>
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
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

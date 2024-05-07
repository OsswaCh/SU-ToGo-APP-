import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

export default function Page() {
  return (
    <View style={{alignItems: "center", margin: 50, gap: 20,}}>
        <Link href="/">Go Back to Main Page</Link>
        <QRCode value="Purchase Successful" size={250}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  qrCodeContainer: {
    marginTop: 20, // Add margin for separation
  },
});
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, View,SafeAreaView, Text,TextInput,ScrollView,Button } from 'react-native';

import Button2 from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/favicon.png');

export default function App() {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollViewMain}>
    <SafeAreaView style={styles.container}>
      <StatusBar style='light'/>
      
      <View style={styles.headercontainer}>
        <View>
        <Text style={{fontSize: 15}}>Title</Text>
        <Text style={{fontSize: 10}}>Subtitle</Text>
        </View>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <View style={styles.headercontainer}>
        <View style={styles.headercontainer_box}>
        <Text style={{fontSize: 15}}>Title</Text>
        <Text style={{fontSize: 10}}>SubTitle</Text>
        </View>
        <View  style={styles.headercontainer_box}>
        <Text style={{fontSize: 15}}>Title</Text>
        <Text style={{fontSize: 10}}>SubTitle</Text>
        </View>
      </View>
      <View style={styles.headercontainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
      <View style={styles.headercontainer_noflex}>
      <Button2 theme="primary" label="Choose a photo" />
      </View>
      <View style={styles.headercontainer}>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView_contcontain}>
        <View style={styles.scrollView_View}>
          <Text style={{padding: 10}}>
            SHOPPING CATEGORY
          </Text>
        </View>
        <View style={styles.scrollView_View}>
          <Text style={{padding: 10}}>
            SHOPPING CATEGORY
          </Text>
        </View>
        <View style={styles.scrollView_View}>
          <Text style={{padding: 10}}>
            SHOPPING CATEGORY
          </Text>
        </View>
        <View style={styles.scrollView_View}>
          <Text style={{padding: 10}}>
            SHOPPING CATEGORY
          </Text>
        </View>
        <View style={styles.scrollView_View}>
          <Text style={{padding: 10}}>
            SHOPPING CATEGORY
          </Text>
        </View>
      </ScrollView>
      </View>
      <View>
      <Text>Title</Text>
      <View style={styles.headercontainer_mid}>
          <View>
            <Text style={{fontSize: 15}}>Title</Text>
            <Text style={{fontSize: 10}}>Subtitle</Text>
          </View>
          <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
          />
        <View style={styles.headercontainer_mid}> 
          <View>
        <Text style={{fontSize: 15}}>Title</Text>
        <Text style={{fontSize: 10}}>Subtitle</Text>
        </View>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
      </View>
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
    flex:1, 
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
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
  },
  headercontainer_mid: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    width:"50%",
  },
  headercontainer_bot: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
    bottom:0,
    position:"absolute"
  },
  headercontainer_noflex: {
    width:"100%",
    alignItems:"center",
  },
  headercontainer_box: {
    backgroundColor:"red",
    flex:1,
    maxWidth:100,
    alignItems:"center",
    padding:10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    backgroundColor:"#d5d5d54a"
  },
  scrollView: {
    backgroundColor: '#d5d5d54a',
    marginHorizontal: 20,
    height:150,
  },
  scrollViewMain: {
    height:"100%",
  },
  scrollView_View:{
    margin: 10,
    backgroundColor:"green",
    borderRadius:4,
    height:100,
    justifyContent:"flex-end",
  },
  scrollView_contcontain:{
  alignItems:"center",
  
  },
});

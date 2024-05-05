import { StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert, Pressable, TouchableOpacity  } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <>
      <ScrollView style={styles.scrollViewMain}>
        <SafeAreaView style={styles.container}>
          <View style={styles.back_button_view}>
            <Link href="/" style={styles.back_button_text}>Back</Link>
          </View>
          <View style={styles.store_logo_view}>
            <Text style={styles.store_logo_text}>
              Market To Go
            </Text>
          </View>
          <View style={styles.payment_options_main_view}>
            <View>
              <Text style={styles.payment_options_text}>
                Payment Options:
              </Text>
            </View>
            <View style={styles.payment_options_view}>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text> Cash </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text> Credit Card </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text> AUC Credit </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text> Store Points </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.pickup_options_view}>
            <View>
              <Text>
                Pickup Options:
              </Text>
            </View>
            <View>
              <Button title="As Soon As Possible"/>
              <Button title="Pickip Later"/>
              <Text>
                NOTE
              </Text>
            </View>
          </View>
          <View style={styles.pay_button_view}>
            <Button title="Pay"/>
          </View>
        </SafeAreaView>
      </ScrollView>
        
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 5,
  },
  scrollViewMain: {
    height: "100%",
  },
  back_button_view: 
  {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    width: 50,
  },
  back_button_text: 
  {
    textAlign: "center"
  },
  store_logo_view: 
  {
    backgroundColor: 'green',
    width:"100%",
    height: 80,
    alignItems: "center"
  },
  store_logo_text: 
  {
    //textAlign: "center",
    fontSize: 32,
    margin: "auto"
  },
  payment_options_main_view: 
  {
    backgroundColor: 'yellow',
    display: 'flex',
    //flexWrap: 'wrap',
    width: "100%",
    //justifyContent: "space-around",
    flexDirection: "column",
  },
  payment_options_text: 
  {
    fontSize: 16,
    margin: 10,
  },
  payment_options_view: 
  {
    flexWrap:"wrap",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  payment_options_buttons: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "35%",
    backgroundColor: 'grey',
    height: 60,
    marginBottom: 10,
    borderRadius: 20,
  },
  pickup_options_view: 
  {
    backgroundColor: 'blue',
    display: 'flex',
    width:"100%",
    //flexWrap: 'wrap',
    //justifyContent: "space-around",
    flexDirection: "column",
  },
  pay_button_view: 
  {
    backgroundColor: 'pink',
    flex: 1,
  },
  
});
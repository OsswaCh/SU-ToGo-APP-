import { StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert, Pressable, TouchableOpacity  } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <>
      <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
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
          <View style={styles.pickup_options_view_main}>
            <View>
              <Text style={styles.payment_options_text}>
                Pickup Options:
              </Text>
            </View>
            <View style={styles.pickup_options_view}>
            <TouchableOpacity style={styles.pickup_options_buttons} /*onPress={onPress}*/>
                <Text> As Soon As Possible </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickup_options_buttons} /*onPress={onPress}*/>
                <Text> Pickup Later </Text>
              </TouchableOpacity>
              <Text style={styles.pickup_options_note_text}>
              *Note, minimum pickup time 15 minutes. Orders left more than 1 Hour after pickup time will be cancelled
              </Text>
            </View>
          </View>
          <View style={styles.pay_button_view}>
              <TouchableOpacity style={styles.pay_button_button} /*onPress={onPress}*/>
                <Text> Pay </Text>
              </TouchableOpacity>
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
  pickup_options_view_main: 
  {
    backgroundColor: 'blue',
    display: 'flex',
    width:"100%",
    //flexWrap: 'wrap',
    //justifyContent: "space-around",
    flexDirection: "column",
  },
  pickup_options_view: 
  {
    alignItems: "center",
  },
  pickup_options_note_text: 
  {
    marginBottom: 5,
    margin: 10,
    fontSize: 10,
  },
  pickup_options_buttons: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    backgroundColor: 'grey',
    height: 60,
    marginBottom: 10,
    borderRadius: 20,
  },
  pay_button_view: 
  {
    backgroundColor: 'pink',
    flex: 1,
    width: "100%",
    alignItems: "center",
    maxHeight: 100,
    justifyContent: "center",

  },
  pay_button_button: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "30%",
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  
});
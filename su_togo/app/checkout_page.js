import { StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Button, Image, Alert, Pressable, TouchableOpacity  } from 'react-native';
import { Link } from 'expo-router';
export default function Page() {

  

  return (
    <>
      <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
        <SafeAreaView style={styles.container}>
          <View style={styles.back_button_view}>
            <Link href="/store_page" style={styles.back_button_text}>
            <Image source={require('../assets/back_Icon.png')} style={[styles.titleImage, { width: 20, height: 20 }]}/>
            Back
              </Link>
          </View>
          <View style={styles.store_logo_view}>
            <Image source={require('../assets/market_logo.png')} style={[styles.titleImage, { width: 150, height: 150 }]}/>      
          </View>
          <View style={styles.payment_options_main_view}>
            <View>
              <Text style={styles.payment_options_text}>
                Payment Options:
              </Text>
            </View>
            <View style={styles.payment_options_view}>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> Cash </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> Credit Card </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> AUC Credit </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payment_options_buttons} /*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> Store Points </Text>
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
                <Text style={styles.payment_options_butttons_text}> As Soon As Possible </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pickup_options_buttons} /*onPress={onPress}*/>
                <Text style={styles.payment_options_butttons_text}> Pickup Later </Text>
              </TouchableOpacity>
              <Text style={styles.pickup_options_note_text}>
              *Note, minimum pickup time 15 minutes. Orders left more than 1 Hour after pickup time will be cancelled
              </Text>
            </View>
          </View>
          <View style={styles.pay_button_view}>
            <TouchableOpacity style={styles.pay_button_button} /*onPress={onPress}*/>
              <Link href="/qrcode_page" style={{height:"100%", width:"100%", alignContent: "center", textAlign: "center", color:"white", backgroundColor: '#000000', borderRadius: 30, fontWeight: 200, fontFamily: "Inter"}}> 
                Pay 
              </Link>
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    display: "flex",
    alignItems: "center",
    width: 20,
    maxHeight: 20,
    flexDirection: "row"
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
  store_logo_view: 
  {
    backgroundColor: '#FFFFFF',
    width:"100%",
    maxHeight: 140,
    alignItems: "center",
    objectFit: "fill"
  },
  payment_options_main_view: 
  {
    //#backgroundColor: 'yellow',
    display: 'flex',
    //flexWrap: 'wrap',
    width: "100%",
    //justifyContent: "space-around",
    flexDirection: "column",
  },
  payment_options_text: 
  {
    fontSize: 14,
    fontFamily: "Inter",
    margin: 10,
    fontWeight: 500,
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
    width: "40%",
    backgroundColor: '#D9D9D966',
    height: 60,
    marginBottom: 25,
    borderRadius: 30,
    
  },
  payment_options_butttons_text:
  {
    fontFamily: "Inter",
    fontWeight: 500,
  },
  pickup_options_view_main: 
  {
    //backgroundColor: 'blue',
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
    fontFamily: "Inter",
    fontWeight: 500,
    marginTop: 0,
  },
  pickup_options_buttons: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    backgroundColor: '#D9D9D966',
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  pay_button_view: 
  {
    //backgroundColor: 'pink',
    flex: 1,
    width: "100%",
    alignItems: "center",
    maxHeight: 100,
    justifyContent: "center",
    minHeight: 70,

  },
  pay_button_button: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: "30%",
    //backgroundColor: '#000000',
    height: 50,
    borderRadius: 25,
    margin: 10,
    color:"#FFFFFF",
    fontWeight: 200,
    fontFamily: "Inter"
  },
  
});
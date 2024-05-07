import { View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <>
      <ScrollView style={styles.scrollViewMain} contentContainerStyle={styles.scrollView_Contstyl}>
        <SafeAreaView style={styles.container}>
            <View style={styles.headercontainer}>
                <Image
                  source={require('../assets/student_union_logo.png')}
                  style={[styles.titleImage, { borderRadius: 10, width: 300, height: 300 }]}
                />
            </View> 
            <View style={styles.box}>
              <TouchableOpacity style={styles.link}>
                <Link href="/store_page" style={{color: "black",fontSize: 16,fontWeight: '500',fontFamily: "Inter", width: "100%", height: "100%", alignContent:"center", textAlign: "center" }}>
                  Store Page
                </Link>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.box}>
              <TouchableOpacity style={styles.link}>
                <Link href="/checkout_page" style={{color: "black",fontSize: 16,fontWeight: '500',fontFamily: "Inter", width: "100%", height: "100%", alignContent:"center", textAlign: "center" }}>
                  Check out Page
                </Link>
              </TouchableOpacity>
            </View> */}
            <View style={styles.box}>
              <TouchableOpacity style={styles.link}>
                <Link href="/admin_page" style={{color: "black",fontSize: 16,fontWeight: '500',fontFamily: "Inter", width: "100%", height: "100%", alignContent:"center", textAlign: "center" }}>
                  Manager Page
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
    justifyContent: "space-evenly",
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

  headercontainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width:"100%",
    maxHeight: 240,
    alignItems: "center",
    objectFit: "fill"
  },
  headercontainer_box: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  box: {
    flexDirection: 'row', // Align items horizontally
    width: '80%',
    height: 70,
    backgroundColor: '#D9D9D966', 
    margin: 25, 
    borderRadius: 30, 
    alignItems: 'center', 
    justifyContent: 'center', // Center items horizontally
  },
  link: {
    color: 'black', // Link color
    fontSize: 16, // Font size
    fontWeight: '500', // Font weight
    fontFamily: "Inter",
    width: "100%",
    height: "100%",
    borderRadius: 30, 
  },
  titleImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    opacity: 1,
  },
});

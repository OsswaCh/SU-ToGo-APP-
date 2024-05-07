import { View } from 'react-native';
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
import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View style={{alignItems: "center", margin: 50, gap: 20,}}>
        <Link href="/">Go Back to Main Page</Link>
    </View>
  );
}
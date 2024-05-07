import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/store_page">Store Page</Link>
      {/* ...other links */}
      <Link href="/checkout_page">Check out Page</Link>
      <Link href="/manager_page">Manager Page</Link>
    </View>
  );
}

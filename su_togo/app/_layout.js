import { Stack } from 'expo-router/stack';
import { useContext, useState } from 'react';
import { ShopContext } from './shop_context';
import { initialOrders } from '../data/initialOrders';
export default function Layout() {
const [password, setPassword] = useState('123');
const [enteredPassword, setEnteredPassword] = useState('');
const [orders, setOrders] = useState(initialOrders);
const [counters, setCounters] = useState({});

  return (
    <ShopContext.Provider value={{password,setPassword,enteredPassword,setEnteredPassword, orders,setOrders, counters,setCounters  }}>
        <Stack   screenOptions={{
            headerStyle: {
            backgroundColor: '#f4511e',
            
            },
            headerTintColor: '#fff',
            headerShown: false,
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        />
    </ShopContext.Provider>
);
}

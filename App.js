import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './screens/Dashboard';
import { ThemeProvider } from 'react-native-elements';
import Sales from './screens/Sales';
import Stock from './screens/Stock';
import Suppliers from './screens/Suppliers';
import Staff from './screens/staff';
import Settings from './screens/settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#f4a261'
            },
            headerTintColor: '#fff',
          }} name="Dashboard" component={Dashboard} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#f4a261'
            },
            headerTintColor: '#fff',
          }} name="Sales" component={Sales} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#ffb4a2'
            },
            headerTintColor: '#fff',
          }} name="Stock" component={Stock} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#8ecae6'
            },
            headerTintColor: '#fff',
          }} name="Suppliers" component={Suppliers} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#83c5be'
            },
            headerTintColor: '#fff',
          }} name="Staff" component={Staff} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: '#a3b18a'
            },
            headerTintColor: '#fff',
          }} name="Settings" component={Settings} />


        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


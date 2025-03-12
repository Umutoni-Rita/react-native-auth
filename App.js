import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Signup from './pages/signup';
import  Home  from './pages/home';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Signup" component={Signup} />
        <Stack.Screen name = "Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



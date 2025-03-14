import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { signOut } from '../controllers/auth';
import { globalStyles } from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
    const [email, setEmail] = useState('');

    const loadUserEmail = async() => {
        try{
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if(storedEmail) {
                setEmail(storedEmail);
            } 
        }catch (error) {
                console.log("Unable to retrieve user email");
                
            }
    };
    useEffect(() => {
        loadUserEmail();
      }, []);


    const handleLogout = async () => {
        try {
            await signOut();
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', "Failed to log out")
        }
    };
    return(
        <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Welcome to the Todo App</Text>
      <Text style={globalStyles.text}>
        {email ? `Logged in as: ${email}` : 'Loading...'}
      </Text>

      <Text style={globalStyles.subheader}>Stay Organized</Text>
      <Text style={globalStyles.text}>
        Keep track of your daily tasks and never miss a deadline. Our To-Do feature helps you prioritize what's important!
      </Text>
      <Text style={globalStyles.text}>
        Tap here to start adding your tasks!
      </Text>

      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText} onPress={handleLogout}>
          Logout
        </Text>
      </View>
    </View>
    )
}

export default Home;
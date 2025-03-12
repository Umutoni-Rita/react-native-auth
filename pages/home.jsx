import React from 'react';
import {View, Text, Button} from 'react-native';
import { signOut } from '../controllers/auth';


const Home = ({navigation}) => {
    const handleLogout = () => {
        signOut().then(() => {
            navigation.navigate('Login');
        });
    }
    return(
        <View>
            <Text>Welcome</Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    )
}

export default Home;
import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signIn } from "../controllers/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    signIn(email, password)
    .then(() => {
      Alert.alert("Success!", "You have successfully logged in!", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    })
    .catch((error) => {
        setError(error.message);
    })

    
  };
  return(
    <View>
        <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput 
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        {error ? <Text>{error}</Text> : null}
    </View>
  )
};

export default Login;


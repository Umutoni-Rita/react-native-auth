import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signUp } from "../controllers/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    signUp(email, password)
    .then(() => {
      Alert.alert("Success!", "Account created!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
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
        <Button title="Signup" onPress={handleSignup} />
        {error ? <Text>{error}</Text> : null}
    </View>
  )
};

export default Signup;


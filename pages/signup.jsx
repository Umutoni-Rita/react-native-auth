// pages/Signup.jsx
import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { signUp } from "../controllers/auth";
import { globalStyles } from "../styles/globalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      // Call the signUp function from auth.js
      const userCredential = await signUp(email, password);
      const token = userCredential.user.stsTokenManager.accessToken;

      // Store the token in AsyncStorage
      await AsyncStorage.setItem("authToken", token);
      await AsyncStorage.setItem("userEmail", email);


      Alert.alert("Success!", "Account created!", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Sign Up</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText} onPress={handleSignup}>
          Signup
        </Text>
      </View>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Text
        style={globalStyles.orText}
        onPress={() => navigation.navigate("Login")}
      >
        Have an account? Login
      </Text>
    </View>
  );
};

export default Signup;

import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signIn } from "../controllers/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { globalStyles } from "../styles/globalStyles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Call the signIn function from auth.js to authenticate the user
      const userCredential = await signIn(email, password);

      // Store user token or credential in AsyncStorage
      const token = userCredential.user.stsTokenManager.accessToken;
      await AsyncStorage.setItem("authToken", token);
      await AsyncStorage.setItem("userEmail", email);

      Alert.alert("Success!", "You have successfully logged in!", [
        { text: "OK", onPress: () => navigation.navigate('Home') },
      ]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Login to start planning</Text>
      <TextInput
      style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none" // Prevent auto-capitalization for emails
      />
      <TextInput
      style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hide password input
        autoCapitalize="none"
      />
      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText} onPress={handleLogin}>
          Login
        </Text>
      </View>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Text
          style={globalStyles.orText}
          onPress={() => navigation.navigate("Signup")}
        >
          No Account? Signup
        </Text>
    </View>
  );
};

export default Login;

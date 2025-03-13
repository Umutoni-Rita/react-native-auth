// pages/Login.jsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signIn } from "../controllers/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      Alert.alert("Success!", "You have successfully logged in!", [
        { text: "OK", onPress: () => navigation.navigate('Home') },
      ]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none" // Prevent auto-capitalization for emails
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hide password input
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;
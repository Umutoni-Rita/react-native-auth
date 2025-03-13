// pages/Signup.jsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signUp } from "../controllers/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      Alert.alert("Success!", "Account created!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
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
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Signup" onPress={handleSignup} />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Signup;
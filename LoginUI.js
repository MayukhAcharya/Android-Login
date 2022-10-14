import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { user_login } from "./user_api";

export default function LoginUI({ navigation }) {
  const [email, setEmail] = React.useState("null");
  const [pass, Setpass] = React.useState("null");

  const validPass = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }
    return null;
  };

  const handleLogin = () => {
    const checkpass = validPass(pass);
    if (!checkpass) {
      user_login({
        email: email,
        password: pass,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            navigation.replace("Home");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(checkpass);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "Andriod" ? "padding" : "height"}
        style={styles.container}
      >
        <Text>Login</Text>
        <TextInput
          style={styles.login}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.login}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => Setpass(value)}
        />

        <TouchableOpacity style={styles.nextBtn} onPress={handleLogin}>
          <Text style={styles.nextBtntext}>Press here for Login</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 310,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#D3D3D3",
    top: 10,
  },
  nextBtn: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: 150,
    height: 50,
    top: 20,
  },
  nextBtntext: {
    color: "white",
  },
});

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

export default function LoginUI({ navigation }) {
  const [email, setEmail] = React.useState("null");
  const [pass, Setpass] = React.useState("null");

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
          //onSubmitEditing={(value) => setEmail(value.nativeEvent.text)}
        />

        <TextInput
          style={styles.login}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
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

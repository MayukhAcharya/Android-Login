import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";
import { Authcontext } from "./api/Authcontext";
const { height, width } = Dimensions.get("window");

export default function LoginUI({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, Setpass] = React.useState("");
  const [isSecureEntry, isSetSecureEntry] = useState(true);
  const { isLoading, login } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Spinner color="red" visible={isLoading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "Andriod" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.usernametext}>Please Enter you Username</Text>

        <TextInput
          mode="outlined"
          theme={{ roundness: 14 }}
          style={styles.login}
          label="Username"
          keyboardType="default"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          mode="outlined"
          theme={{ roundness: 14 }}
          //outlineColor="white"
          style={styles.login}
          label="Password"
          secureTextEntry={isSecureEntry}
          onChangeText={(value) => Setpass(value)}
          right={
            <TextInput.Icon
              //icon="eye"
              icon={isSecureEntry ? "eye" : "eye-off"}
              onPress={() => isSetSecureEntry(!isSecureEntry)}
            />
          }
        />

        {email == "" || password == "" ? (
          <TouchableOpacity style={styles.nextBtndisable} disabled={true}>
            <Text style={styles.nextBtntext}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => login(email, password)}
          >
            <Text style={styles.nextBtntext}>Login</Text>
          </TouchableOpacity>
        )}

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
      <Text style={styles.foottext}>
        By log in you agree with our{" "}
        <Text style={styles.underlineText}>Terms and Condition</Text>
        <Text> and </Text>
        <Text style={styles.underlineText}>Privacy policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  usernametext: {
    top: -50,
    width: width,
    textAlign: "center",
    fontFamily: "sans-serif-light",
    fontSize: 26,
  },
  login: {
    //borderWidth: 1,
    borderColor: "#777",
    //padding: 2,
    margin: 14,
    width: width / 1.2,
    height: 60,
    //elevation: 5,
    //backgroundColor: "#D3D3D3",
    top: 20,
  },
  nextBtn: {
    borderRadius: 12,
    backgroundColor: "red",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.8,
    height: 50,
    top: 60,
  },
  nextBtntext: {
    color: "white",
    fontFamily: "sans-serif-light",
    fontSize: 20,
    justifyContent: "center",
    width: width / 7,
  },
  nextBtndisable: {
    borderRadius: 12,
    backgroundColor: "black",
    padding: 10,
    margin: 8,
    alignItems: "center",
    width: width / 1.8,
    height: 50,
    top: 60,
  },
  foottext: {
    flexDirection: "column",
    alignItems: "center",
    width: width / 1.1,
    color: "grey",
    top: -20,
  },
  underlineText: {
    textDecorationLine: "underline",
    color: "red",
  },
});

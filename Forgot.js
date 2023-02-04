import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import React, { useContext, useState } from "react";
import { Authcontext } from "./api/Authcontext";
const { height, width } = Dimensions.get("window");

export default function Forgot({ navigation }) {
  const [mobile, SetMobile] = useState("");
  const { forgotpass } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Text style={styles.usernametext}>Please Enter you Mobile Number</Text>
      <TextInput
        placeholder="Mobile number"
        value={mobile}
        onChangeText={(value) => SetMobile(value)}
        style={styles.input}
      />
      <Button
        title="Get OTP"
        onPress={() => forgotpass(mobile) || navigation.navigate("reset")}
      />
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    //padding: 2,
    margin: 14,
    width: width / 1.2,
    height: 60,
    //elevation: 5,
    backgroundColor: "#D3D3D3",
    top: 20,
    borderRadius: 20,
  },
});

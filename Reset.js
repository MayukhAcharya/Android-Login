import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { Authcontext } from "./api/Authcontext";
import Spinner from "react-native-loading-spinner-overlay";
const { height, width } = Dimensions.get("window");

export default function Reset({ navigation }) {
  const [otp, SetOtp] = useState("");
  const [mobile, SetMobile] = useState("");
  const [npass, SetNpass] = useState("");
  const { resetpass, isLoading } = useContext(Authcontext);
  return (
    <View style={styles.container}>
      <Spinner color="red" visible={isLoading} />
      <TextInput
        placeholder="OTP"
        value={otp}
        onChangeText={(value) => SetOtp(value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile number"
        value={mobile}
        onChangeText={(value) => SetMobile(value)}
        style={styles.input}
      />
      <TextInput
        placeholder="New Password"
        value={npass}
        onChangeText={(value) => SetNpass(value)}
        style={styles.input}
      />
      <Button
        title="Reset Password"
        onPress={() =>
          resetpass(otp, mobile, npass) || navigation.navigate("login")
        }
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

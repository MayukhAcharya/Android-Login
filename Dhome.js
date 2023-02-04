import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Snackbar } from "react-native-paper";
import { Authcontext } from "./api/Authcontext";
//import Snackbar from "react-native-snackbar";
export default function Dhome({ navigation }) {
  const [visible, setVisible] = useState(true);
  const onDismissSnackBar = () => setVisible(false);
  const { logout, userInfo } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("test")}>
        Hello {userInfo.data.first_name}
      </Text>
      <Button title="Logout" onPress={() => logout()} />
      <Snackbar
        style={styles.snackbar1}
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={1500}
      >
        Successfully Logged in
      </Snackbar>
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
  snackbar1: {
    elevation: 5,
  },
});

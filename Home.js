import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Snackbar } from "react-native-paper";
//import Snackbar from "react-native-snackbar";
export default function Home() {
  const [visible, setVisible] = useState(true);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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

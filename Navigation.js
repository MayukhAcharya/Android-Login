import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginUI from "./LoginUI";
import Home from "./Home";
import { Authcontext } from "./api/Authcontext";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { userInfo } = useContext(Authcontext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {userInfo.access_token ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={LoginUI}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

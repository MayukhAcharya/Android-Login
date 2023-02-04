import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginUI from "./LoginUI";
import Home from "./Home";
import { Authcontext } from "./api/Authcontext";
import Test from "./Test";
import Dhome from "./Dhome";
import Forgot from "./Forgot";
import Reset from "./Reset";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { userToken, userInfo } = useContext(Authcontext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {userToken !== null ? (
          <>
            {userInfo.data.user_type === "1" ? (
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="Dhome"
                component={Dhome}
                options={{ headerShown: false }}
              />
            )}
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={LoginUI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="forgot"
              component={Forgot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="reset"
              component={Reset}
              options={{ headerShown: false }}
            />
          </>
        )}

        <Stack.Screen
          name="test"
          component={Test}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, SetIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [otptoken, SetOtpToken] = useState(null);
  const [user, SetUser] = useState(null);

  const login = (mobile_number, password) => {
    SetIsLoading(true);
    axios
      .post(
        `${API_URL}/login/`,
        {
          mobile_number: "91" + mobile_number,
          password: password,
        },
        {
          headers: {
            Authorization: "No Auth",
          },
        }
      )
      .then((res) => {
        //console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);
        SetUser(userInfo.data.user_type);
        setUserToken(userInfo.token.access);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token.access);
        SetIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        SetIsLoading(false);
      });
    // setUserToken("iforubgkfjknjskvy");
    // AsyncStorage.setItem("userToken", userToken);
  };

  const logout = () => {
    SetIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    SetIsLoading(false);
  };

  const forgotpass = (mobile_number) => {
    axios
      .get(`${API_URL}/otp/?mobile_number=${"91" + mobile_number}`, {
        mobile_number: mobile_number,
      })
      .then((res) => {
        let otptoken = res.data.data.token;
        SetOtpToken(otptoken);
        console.log(res.data.data.token);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const resetpass = (otp, mobile_number, password) => {
    SetIsLoading(true);
    axios
      .post(`${API_URL}/forget-password/`, {
        token: otptoken,
        otp: otp,
        mobile_number: "91" + mobile_number,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        alert("Password updated");
        SetIsLoading(false);
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  return (
    <Authcontext.Provider
      value={{
        resetpass,
        forgotpass,
        logout,
        login,
        isLoading,
        userToken,
        userInfo,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { base_url } from "../config";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setISLoading] = useState(false);

  const login = (username, password, grant_type = "password") => {
    setISLoading(true);

    axios
      .post(`${base_url}/login/`, {
        username,
        password,
        grant_type,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setISLoading(false);
      })
      .catch((res) => {
        console.log("Login Error");
        setISLoading(false);
        alert("Wrong username or password");
      });
  };

  return (
    <Authcontext.Provider value={{ isLoading, userInfo, login }}>
      {children}
    </Authcontext.Provider>
  );
};

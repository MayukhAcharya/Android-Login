import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { API_URl } from "@env";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setISLoading] = useState(false);

  const login = (username, password, grant_type = "password") => {
    setISLoading(true);

    axios
      .post(`${API_URl}/login/`, {
        username,
        password,
        grant_type,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(res.data.message);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setISLoading(false);
      })
      .catch(function (error) {
        //console.log(error.response.data.errors);
        setISLoading(false);
        alert(error.response.data.errors);
      });
  };

  return (
    <Authcontext.Provider value={{ isLoading, userInfo, login }}>
      {children}
    </Authcontext.Provider>
  );
};

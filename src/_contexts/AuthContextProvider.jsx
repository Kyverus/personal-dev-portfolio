import React, { useContext, createContext, useEffect, useState } from "react";
import axios, { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";

const AuthContext = createContext(null);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a useAuthContext");
  }
  return context;
}

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState("");
  const [authResolved, setAuthResolved] = useState(false);

  useEffect(() => {
    async function attemptRefresh() {
      try {
        const refRes = await axios.get(
          "https://api-kirlian-dev-portfolio.vercel.app/api/users/refresh",
          {
            withCredentials: true,
          }
        );

        if (refRes.status === 200) {
          axiosPrivate.defaults.headers.common[
            "Authorization"
          ] = `BEARER ${refRes.data.accessToken}`;

          console.log("access token refreshed");
          setAuth(refRes.data.accessToken);
          setAuthResolved(true);
        }
      } catch (error) {
        console.log("ref token invalid", error);
        setAuthResolved(true);
      }
    }

    if (auth == "") {
      attemptRefresh();
    } else {
      setAuthResolved(true);
    }
  }, []);

  async function loginUser(formDetails) {
    try {
      const response = await axios.post(
        "api/users/login",
        JSON.stringify({
          username: formDetails.username,
          password: formDetails.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response.data);
      axiosPrivate.defaults.headers.common[
        "Authorization"
      ] = `BEARER ${response.data.accessToken}`;
      setAuth(response.data.accessToken);
      return { success: true };
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
  }

  async function logoutUser() {
    try {
      const response = await axiosPrivate.get("/api/users/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      axiosPrivate.defaults.headers.common["Authorization"] = "";
      setAuth("");
      setAuthResolved(false);
      console.log("logged out", response);
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, authResolved, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

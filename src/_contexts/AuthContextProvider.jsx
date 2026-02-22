import React, { useContext, createContext, useEffect, useState } from "react";
import axios, { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useAPIRequestHandler } from "../_hooks/useAPIRequestHandler.js";
import { useAPIErrorHandler } from "../_hooks/useAPIErrorHandler.js";

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
  const { handleAPIRequest } = useAPIRequestHandler();
  const { handleAPIErrors } = useAPIErrorHandler();

  useEffect(() => {
    async function attemptRefresh() {
      try {
        const refRes = await axios.get(
          "https://api-kirlian-dev-portfolio.vercel.app/api/users/refresh",
          {
            withCredentials: true,
          },
        );

        if (refRes.status === 200) {
          axiosPrivate.defaults.headers.common["Authorization"] =
            `BEARER ${refRes.data.accessToken}`;

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
    const response = await handleAPIRequest(() =>
      axios.post(
        "api/users/login",
        JSON.stringify({
          username: formDetails.username,
          password: formDetails.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      ),
    );

    const success = await handleAPIErrors(response);

    if (success) {
      axiosPrivate.defaults.headers.common["Authorization"] =
        `BEARER ${response.data.accessToken}`;
      setAuth(response.data.accessToken);
      toast.success("User Successfully Logged In!");
    }

    return { success };
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
      setAuthResolved(true);
      toast.success("User Successfully Logged Out!");
    } catch (error) {
      console.log(error);
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

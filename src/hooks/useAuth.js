import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

const authContext = createContext();

const useAuth = () => {
  const [authed, setAuthed] = useState(true); // true authencated | false unauthencated

  useEffect(() => {
    async function checkToken() {
    if (localStorage.getItem("token")) {
      try {
        const token = await axios.get("token");
        if(token){
          setAuthed(true);
        }
        
      } catch (error) {
        if (error.response.status === 401) {
          setAuthed(false);
          localStorage.clear();
        }
      }
    } else {
      setAuthed(false);
    }
  }
  checkToken();
  }, []);

  return {
    authed,
    login: async (email, password, remind) => {
      try {
        const result = await axios.post("admin/login", {
          email,
          password,
        });
        if (remind) {
          //reminder Code
        }
       

        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userName", result.data.user.name);
        localStorage.setItem("email", result.data.user.email);

        setAuthed(true);
        
        return "Successful";
      } catch (error) {
        console.log(error);
        return error.response.data.message;
      }
    },
    logout: () => {
      try {
        setAuthed(false);

        localStorage.clear();
        return "Successful";
      } catch (error) {
        return error;
      }
    },
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const AuthConsumer = () => {
  return React.useContext(authContext);
};
export default AuthConsumer;

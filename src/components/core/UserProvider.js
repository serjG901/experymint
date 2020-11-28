import React, { useEffect, useState, useContext } from "react";
import { useLogin } from "./LoginProvider";
import { getUser, updateUser } from "../../lib/fetchData";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext).user;
};

export const useUserSet = () => {
  return useContext(UserContext).setUser;
};

export const UserProvider = ({ children }) => {
  const isLogin = useLogin();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isLogin) {
      getUser().then((userData) => {
        setUser(userData);
      });
    } else {
      setUser({});
    }
  }, [isLogin]);

  useEffect(() => {
    if (isLogin && Object.keys(user).length !== 0) {
      getUser().then((userData) => {
        const equal = JSON.stringify(user) === JSON.stringify(userData);
        console.log(equal);
        if (!equal) {
          console.log(equal);
          updateUser(user).then((userData) => {
            setUser(userData);
          });
        }
      });
    }
  }, [isLogin, user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

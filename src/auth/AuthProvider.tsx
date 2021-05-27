import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

type AuthContextProps = {
  user: firebase.User | null;
};

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user) => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const login = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user) => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ signup, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

type AuthContextProps = {
  user: firebase.User | null;
};

function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>();

  const signup = async (email: string, password: string, history: any) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user: any) => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const login = async (email: string, password: string, history: any) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user: any) => setCurrentUser(user));
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

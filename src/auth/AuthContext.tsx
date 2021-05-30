import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

type User = {
  id: string;
  name: string;
};

type authContextType = {
  user: User | null;
  login: (email: string, password: string, history: any) => Promise<void>;
  signup: (email: string, password: string, history: any) => void;
  //   signOut: () => void;
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

const [useAuth, SetAuthProvider] = createCtx<authContextType>();

const AuthProvider: React.FC = (props) => {
  const auth = useAuthCtx();
  return <SetAuthProvider value={auth}>{props.children}</SetAuthProvider>;
};

const useAuthCtx = (): authContextType => {
  const [user, setUser] = React.useState<User | null>(null);

  const login = async (email: string, password: string, history: any) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user: any) => setUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (email: string, password: string, history: any) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      auth.onAuthStateChanged((user: any) => setUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return { user, login, signup };
};

const AuthContext = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthProvider>{children}</AuthProvider>;
};

export { AuthContext, AuthProvider };

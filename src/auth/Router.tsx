import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Login } from "./Login";

const Router = ({ component, ...rest }: any) => {
  const { currentUser } = useContext(AuthContext);

  const Component = currentUser ? component : Login;

  return <Route {...rest} component={Component} />;
};

export default Router;

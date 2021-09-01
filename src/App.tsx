import React from "react";
import { AuthProvider } from "./auth/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./auth/Router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./auth/Login";
import { Home } from "./components/Home";
import { SignUp } from "./auth/SingnUp";

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Router exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;

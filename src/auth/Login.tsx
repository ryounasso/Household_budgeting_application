import React, { useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button, VStack, Heading } from "@chakra-ui/react";

export const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };

  useEffect(() => {
    currentUser && history.push("/");
  }, [currentUser]);

  const login = async (email: string, password: string, history: any) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <VStack>
      <Heading m={4}>Log In</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="center">
          <label>
            <p>Email</p>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <Button type="submit">Log in</Button>
          <Link to="/signup">アカウントをお持ちでない方はこちら</Link>
        </VStack>
      </form>
    </VStack>
  );
};

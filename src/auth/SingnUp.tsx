import React, { useEffect, useContext } from "react";
import { Box, Button, VStack, Heading } from "@chakra-ui/react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    currentUser && console.log("/");
  }, [currentUser]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  const signup = async (email: string, password: string, history: any) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      //   auth.onAuthStateChanged((user) => setCurrentUser(user));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <VStack>
      <Heading m={4}>Sign Up</Heading>
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
          <Button type="submit">Sign Up</Button>
          <Link to="/login">アカウント登録済みの方はこちら</Link>
        </VStack>
      </form>
    </VStack>
  );
};

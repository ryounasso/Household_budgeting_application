import React, { useContext } from "react";
import { Box, Heading, Button, HStack } from "@chakra-ui/react";
import { auth } from "../firebase/Firebase";
import { AuthContext } from "../auth/AuthProvider";

interface headerProps {
  date: Date;
  setPrevMonth: () => void;
  setNextMonth: () => void;
}

export const Header = ({ date, setPrevMonth, setNextMonth }: headerProps) => {
  const { currentUser } = useContext(AuthContext);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <Box m={4}>
      <HStack spacing={8}>
        <Button size="xs" onClick={setPrevMonth}>
          前月
        </Button>
        <Heading size="md">
          {year}年{month}月
        </Heading>
        <Button size="xs" onClick={setNextMonth}>
          次月
        </Button>
      </HStack>
    </Box>
  );
};

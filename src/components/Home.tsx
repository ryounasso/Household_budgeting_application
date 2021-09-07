import React, { useState } from "react";
import { Box, Center, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { AddItem } from "./AddItem";

export const Home = () => {
  const [date, setDate] = useState(new Date());

  const setPrevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  };

  const setNextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    setDate(new Date(year, month, day));
  };

  return (
    <Center>
      <VStack>
        <Header
          date={date}
          setPrevMonth={setPrevMonth}
          setNextMonth={setNextMonth}
        />
        <Balance />
        <AddItem />
      </VStack>
    </Center>
  );
};

import React, { useState } from "react";
import {
  Box,
  HStack,
  Input,
  Select,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

export const AddItem = () => {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [detail, setDetail] = useState<string>();
  const [type, setType] = useState<string>("プラス");

  const selectHandler = (e: { target: HTMLSelectElement }) => {
    setType(e.target.value);
  };

  const submitHandler = () => {
    // e.preventDefault();
    if (type === "プラス") {
      console.log("プラスです");
    } else if (type === "マイナス") {
      console.log("マイナスです");
    } else {
      alert("error occured");
    }
  };

  return (
    <HStack>
      <Select size="xs" maxWidth="50" onChange={selectHandler}>
        <option value="プラス">+</option>
        <option value="マイナス">-</option>
      </Select>
      <FormLabel minWidth="10%">内容</FormLabel>
      <Input placeholder="内容" size="xs" />
      <FormLabel minWidth="10%">金額</FormLabel>
      <Input placeholder="金額" size="xs" maxWidth="50px" />
      <Box>円</Box>
      <Button fontSize="xs" height="7" type="submit" onClick={submitHandler}>
        追加
      </Button>
    </HStack>
  );
};

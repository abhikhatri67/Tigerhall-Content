import { Box } from "@chakra-ui/react";
import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return <Box color="red.500">{message}</Box>;
};

export default Error;

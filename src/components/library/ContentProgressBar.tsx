import React from "react";
import { Box } from "@chakra-ui/react";

const ContentProgressBar: React.FC = () => {
  return (
    <Box position="absolute" bottom={0} left="0" w="100%" h="2px" bg="gray.400">
      <Box w="30%" h="2px" bg="tigerOrange.500" />
    </Box>
  );
};

export default ContentProgressBar;

import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const SpinnerLoader: React.FC = () => {
  return (
    <Box alignItems="center" display="flex" mt="16px">
      <Spinner mx="auto" thickness="4px" speed="0.65s" color="tigerOrange.50" size="xl" />
    </Box>
  );
};

export default SpinnerLoader;

import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const ContentStatus: React.FC = () => {
  return (
    <Box position="absolute" zIndex="1" borderTopLeftRadius="8px" borderBottomRadius="5px" display="flex" flexDirection="row" alignItems="center" gap="4px" p="4px" bg="tigerOrange.50">
      <Image height="12px" src={"/images/Content-status.svg"} alt="Content Status" />
      <Text fontSize="xs" fontWeight="700" color="grey.900">
        30% Completed
      </Text>
    </Box>
  );
};

export default ContentStatus;

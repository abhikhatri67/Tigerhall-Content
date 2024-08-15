import React from "react";
import { InputGroup, Input, InputLeftElement, Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { IMAGE_URL, TIGERHALL_LOGO } from "../../constants";

const Header: React.FC = () => {
  // Replace values for dark/light mode here.
  const bgColor: string = useColorModeValue("darkGray.500", "darkGray.500");
  const bgColorInput: string = useColorModeValue("darkGray.900", "darkGray.900");
  const borderColor: string = useColorModeValue("grey.700", "grey.700");
  const textColor: string = useColorModeValue("gray.300", "gray.500");

  return (
    <header>
      <Box p={4} bg={bgColor}>
        <Flex justify="center">
          <Image height="28px" src={IMAGE_URL + TIGERHALL_LOGO} alt="Tigerhall Logo" />
          <InputGroup width={{ base: "100%", md: "50%" }} mx="auto" size="md" bg={bgColorInput} borderRadius="4px" borderColor={borderColor} color={textColor}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="white" />
            </InputLeftElement>
            <Input type="text" placeholder="Search.." aria-label="Search through content" />
          </InputGroup>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;

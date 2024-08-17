import React, { useCallback } from "react";
import { InputGroup, Input, InputLeftElement, Flex, Image, Box, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { IMAGE_URL, TIGERHALL_LOGO, TIGERHALL_SMALL_LOGO } from "../../constants";
import { debounce } from "../../helpers/utils";

interface HeadingProps {
  onSearch: (key: string) => void;
}

const Header: React.FC<HeadingProps> = ({ onSearch }) => {
  const imageSrc = useBreakpointValue({
    base: IMAGE_URL + TIGERHALL_SMALL_LOGO,
    md: IMAGE_URL + TIGERHALL_LOGO,
  });

  // Replace values for dark/light mode here.
  const bgColor: string = useColorModeValue("darkGray.500", "darkGray.500");
  const bgColorInput: string = useColorModeValue("darkGray.900", "darkGray.900");
  const borderColor: string = useColorModeValue("grey.700", "grey.700");
  const textColor: string = useColorModeValue("gray.300", "gray.500");

  const debouncedSetKeyword = useCallback(
    debounce((newKeyword: string) => {
      onSearch(newKeyword);
    }, 300), // 300ms delay
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedSetKeyword(value);
  };

  return (
    <header>
      <Box p={4} bg={bgColor}>
        <Flex justify="center" alignItems="center">
          <Image height="28px" src={imageSrc} alt="Tigerhall Logo" />

          <InputGroup width={{ base: "70%", md: "50%" }} mx="auto" size="md" bg={bgColorInput} borderRadius="4px" borderColor={borderColor} color={textColor}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="white" />
            </InputLeftElement>
            <Input type="text" placeholder="Search.." aria-label="Search through content" onChange={handleInputChange} />
          </InputGroup>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;

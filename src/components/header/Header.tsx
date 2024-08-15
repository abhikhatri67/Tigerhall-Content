import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex justify="center" p={4}>
        <Image height="28px" src="/images/Tigerhall-horizontal-logo.svg" alt="Logo" />
        <InputGroup width="30%" mx="auto" size="sm">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input type="text" placeholder="Search.." />
        </InputGroup>
      </Flex>
    </header>
  );
};

export default Header;

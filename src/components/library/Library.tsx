import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import ContentList from "./ContentList";

interface LibraryProps {
  keyword: string;
}

export const Library: React.FC<LibraryProps> = ({ keyword }) => {
  return (
    <section>
      <Box p="62px 60px" bg="black" minHeight="calc(100vh - 64px)">
        <Heading color="grey.100" fontSize="2xl" fontWeight="700" textAlign={{ base: "center", md: "left" }}>
          Tigerhall Library
        </Heading>
        <ContentList keyword={keyword} />
      </Box>
    </section>
  );
};

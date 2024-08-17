import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import PodcastList from "./PodcastList";

interface LibraryProps {
  keyword: string;
}

export const Library: React.FC<LibraryProps> = ({ keyword }) => {
  return (
    <section>
      <Box p="36px" bg="black">
        <Heading color="grey.100" fontSize="2xl" fontWeight="700">
          Tigerhall Library
        </Heading>
        <PodcastList keyword={keyword} />
      </Box>
    </section>
  );
};

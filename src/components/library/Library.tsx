import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import { useQuery } from "@apollo/client";

import { GET_PODCASTS, ContentCardsData } from "../../podcastQuery";

export const Library: React.FC = () => {
  const { loading, error, data } = useQuery<ContentCardsData>(GET_PODCASTS);
  console.log("data: ", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      <Box p="36px">
        <Heading fontSize="2xl">I'm a Heading</Heading>
      </Box>
    </section>
  );
};

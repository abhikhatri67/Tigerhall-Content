import React from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_PODCASTS, ContentCardsData, ContentCardsVars } from "../../podcastQuery";
import PodcastCard from "./Podcast";
import { addResizeToUri } from "../../helpers/utils";

const PodcastList: React.FC = () => {
  const { loading, error, data } = useQuery<ContentCardsData, ContentCardsVars>(GET_PODCASTS, {
    variables: { keyword: "" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const podcasts = data?.contentCards.edges || [];

  return (
    <Box display="flex" flexWrap="wrap" gap="16px" mt="24px">
      {podcasts.map(podcast => (
        <PodcastCard key={podcast.id} name={podcast.name} imageUri={addResizeToUri(podcast.image?.uri)} />
      ))}
    </Box>
  );
};

export default PodcastList;

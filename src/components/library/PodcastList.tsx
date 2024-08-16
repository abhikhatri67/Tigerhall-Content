import React from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_PODCASTS, ContentCardsData } from "../../podcastQuery";
import PodcastCard from "./Podcast";

const PodcastList: React.FC = () => {
  const { loading, error, data } = useQuery<ContentCardsData>(GET_PODCASTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const podcasts = data?.contentCards.edges || [];

  return (
    <Box display="flex" flexWrap="wrap" gap="16px" mt="24px">
      {podcasts.map(podcast => (
        <PodcastCard key={podcast.name} name={podcast.name} imageUri={podcast.image?.uri || "/images/placeholder-image.svg"} />
      ))}
    </Box>
  );
};

export default PodcastList;

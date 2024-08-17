import React from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import SpinnerLoader from "../loaders/Spinner";
import Error from "../error/Error";
import PodcastCard from "./PodcastCard";

import { ContentCardsData, PodcastVars } from "../../data/types";
import { GET_PODCASTS } from "../../data/podcastQuery";
import { addResizeToUri } from "../../helpers/utils";

const PodcastList: React.FC<{ keyword: string }> = ({ keyword }) => {
  const { loading, error, data } = useQuery<ContentCardsData, PodcastVars>(GET_PODCASTS, {
    variables: { keyword, limit: 20 },
  });

  if (loading) return <SpinnerLoader />;
  if (error) return <Error message={error?.message || "Something went wrong!"} />;

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

import React from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import SpinnerLoader from "../loaders/Spinner";
import Error from "../error/Error";
import ContentCard from "./ContentCard";

import { ContentCardsData, ContentVars } from "../../data/types";
import { GET_CONTENT } from "../../data/podcastQuery";
import { addResizeToUri } from "../../helpers/utils";

const ContentList: React.FC<{ keyword: string }> = ({ keyword }) => {
  const { loading, error, data } = useQuery<ContentCardsData, ContentVars>(GET_CONTENT, {
    variables: { keyword, limit: 20, offset: 0 },
  });

  // TODO: Add error page and Shimmer UI.
  if (loading) return <SpinnerLoader />;
  if (error) return <Error message={error?.message || "Something went wrong!"} />;

  const contents = data?.contentCards.edges || [];

  return (
    <Box display="flex" flexWrap="wrap" gap="24px" mt="40px" justifyContent={{ base: "center", md: "left " }}>
      {contents.map(content => {
        // TODO: Move these to helper file.
        const { categories, experts, name, length } = content;
        const category = categories[0]?.name.split("category ")[1] || "Placeholder Category";
        const expert = experts[0];
        const company = expert?.company || "Placeholder Company";
        const time = `${Math.round(length / 60)}m`;
        return <ContentCard key={content.id} contentCategory={category} description={name} imageUri={addResizeToUri(content.image?.uri)} time={time} expertName={`${expert.firstName} ${expert.lastName}`} expertCompany={company} />;
      })}
    </Box>
  );
};

export default ContentList;

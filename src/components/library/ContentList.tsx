import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import SpinnerLoader from "../loaders/Spinner";
import Error from "../error/Error";
import ContentCard from "./ContentCard";

import { Content, ContentCardsData, ContentVars } from "../../data/types";
import { GET_CONTENT } from "../../data/podcastQuery";
import { addResizeToUri } from "../../helpers/utils";

const ContentList: React.FC<{ keyword: string }> = ({ keyword }) => {
  const [offset, setOffset] = useState(0);
  const [contents, setContents] = useState<Content[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // TODO: Fix multiple api calls logic.
  const { loading, error, fetchMore } = useQuery<ContentCardsData, ContentVars>(GET_CONTENT, {
    variables: { keyword, limit: 15, offset },
    notifyOnNetworkStatusChange: true,
    onCompleted: newData => {
      if (newData.contentCards.edges.length === 0) {
        setHasMore(false);
      } else {
        setContents(prevContents => [...prevContents, ...newData.contentCards.edges]);
        setOffset(prevOffset => prevOffset + newData.contentCards.edges.length);
      }
      setIsFetching(false);
    },
  });

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const bottomPosition = document.documentElement.offsetHeight;

    if (scrollPosition >= bottomPosition - 200 && !loading && !isFetching && hasMore) {
      setIsFetching(true);

      fetchMore({
        variables: {
          offset: contents.length,
        },
      }).catch(() => {
        setIsFetching(false);
      });
    }
  }, [contents.length, fetchMore, loading, isFetching, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading && offset === 0) return <SpinnerLoader />;
  if (error) return <Error message={error?.message || "Something went wrong!"} />;

  return (
    <Box display="flex" flexWrap="wrap" gap="24px" mt="40px" justifyContent={{ base: "center", md: "left" }}>
      {contents.map(content => {
        // TODO: Move these to utils.
        const { categories, experts, name, length } = content;
        const category = categories[0]?.name.split("category ")[1] || "Placeholder Category";
        const expert = experts[0];
        const company = expert?.company || "Placeholder Company";
        const time = `${Math.round(length / 60)}m`;
        return <ContentCard key={content.id} contentCategory={category} description={name} imageUri={addResizeToUri(content.image?.uri)} time={time} expertName={`${expert.firstName} ${expert.lastName}`} expertCompany={company} />;
      })}
      {loading && <SpinnerLoader />}
      {!hasMore && (
        <Box textAlign="center" w="100%" mt="20px" color="white">
          You are all set up!
        </Box>
      )}
    </Box>
  );
};

export default ContentList;

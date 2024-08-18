import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@chakra-ui/react";

import SpinnerLoader from "../loaders/Spinner";
import Error from "../error/Error";
import ContentCard from "./ContentCard";

import { Content } from "../../data/types";
import { addResizeToUri } from "../../helpers/utils";

import useContentQuery from "../../hooks/useContentQuery";

const ContentList: React.FC<{ keyword: string }> = ({ keyword }) => {
  const [contents, setContents] = useState<Content[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);

  const { loading, error, data } = useContentQuery(keyword, offset);

  useEffect(() => {
    if (!data) return;
    if (data.contentCards.edges.length === 0) {
      setHasMore(false);
    } else {
      if (keyword) {
        setContents([...data.contentCards.edges]);
      } else {
        setContents(prevContents => [...prevContents, ...data.contentCards.edges]);
      }
    }
  }, [data, keyword]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const bottomPosition = document.documentElement.offsetHeight;

    if (scrollPosition >= bottomPosition - 50 && !loading && !isFetching && hasMore) {
      setIsFetching(true);

      setOffset(keyword ? 0 : contents.length);
      window.scrollTo(0, bottomPosition - 50);
    }
  }, [contents.length, loading, isFetching, hasMore, keyword]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading && contents.length === 0) return <SpinnerLoader />;
  if (error) return <Error message={error?.message || "Something went wrong!"} />;

  return (
    <section>
      <Box display="flex" flexWrap="wrap" gap="24px" mt="40px" justifyContent={{ base: "center", md: "left" }}>
        {contents.map(content => {
          // TODO: Move this to helper file.
          const { categories, experts, name, length } = content;
          const category = categories[0]?.name.split("category ")[1] || "Placeholder Category";
          const expert = experts[0];
          const company = expert?.company || "Placeholder Company";
          const time = `${Math.round(length / 60)}m`;
          return <ContentCard key={content.id} contentCategory={category} description={name} imageUri={addResizeToUri(content.image?.uri)} time={time} expertName={`${expert.firstName} ${expert.lastName}`} expertCompany={company} />;
        })}
      </Box>
      {loading && <SpinnerLoader />}
      {!hasMore && (
        <Box textAlign="center" w="100%" mt="20px" color="white">
          You are all set up!
        </Box>
      )}
    </section>
  );
};

export default ContentList;

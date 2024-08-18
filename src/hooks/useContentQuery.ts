import { useQuery } from "@apollo/client";
import { ContentCardsData, ContentVars } from "../data/types";
import { GET_CONTENT } from "../data/podcastQuery";

const useContentQuery = (keyword: string, offset: number) => {
  const { loading, error, data } = useQuery<ContentCardsData, ContentVars>(GET_CONTENT, {
    variables: { keyword, limit: 10, offset },
  });

  return { loading, error, data };
};

export default useContentQuery;

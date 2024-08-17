import { gql } from "@apollo/client";

// GraphQL Query
export const GET_CONTENT = gql`
  query GetPodcasts($limit: Int!, $keyword: String!, $offset: Int) {
    contentCards(filter: { limit: $limit, offset: $offset, keywords: $keyword, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          id
          length
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

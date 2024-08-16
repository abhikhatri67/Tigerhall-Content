import { gql } from "@apollo/client";

// GraphQL Query
export const GET_PODCASTS = gql`
  query GetPodcasts($keyword: String!) {
    contentCards(filter: { limit: 20, keywords: $keyword, types: [PODCAST] }) {
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

// TypeScript Types
export interface Image {
  uri: string;
}

export interface Category {
  name: string;
}

export interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

export interface Podcast {
  id: string;
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
}

export interface ContentCardsData {
  contentCards: {
    edges: Podcast[];
  };
}

export interface ContentCardsVars {
  keyword: string;
}

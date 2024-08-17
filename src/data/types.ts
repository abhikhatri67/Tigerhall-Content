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

export interface PodcastVars {
  keyword: string;
  limit: number;
}

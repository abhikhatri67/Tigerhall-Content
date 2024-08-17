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

export interface Content {
  id: string;
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
  length: number;
}

export interface ContentCardsData {
  contentCards: {
    edges: Content[];
  };
}

export interface ContentVars {
  keyword: string;
  limit: number;
  offset: number;
}

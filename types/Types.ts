export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface HashGridProps {
  hashtags: string[];
  handleClick: (tag: string) => void | undefined;
  visibility: boolean;
}

export interface HashProps {
  hashtag: string;
  handleClick: (tag: string) => void | undefined;
}

export interface FreqMap {
  [key: string]: number;
}

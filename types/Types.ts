import { NextRouter } from 'next/router';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface HashGridProps {
  hashtags: string[];
  visibility: boolean;
}

export interface HashProps {
  hashtag: string;
}

export interface FreqMap {
  [key: string]: number;
}

export interface HashClick {
  tag: string;
  hashtag: string;
  router: NextRouter;
}

import { FreqMap, Post } from '@/types/Types';

export function limitText(text: string, limit: number): string {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
}

export function capitalizeTitle(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateHashtags(title: string): string[] {
  const blacklist = ['the', 'in', 'an', 'as', 'at', 'a'];

  const filteredTitle = title
    .split(' ')
    .map((word) => word.trim())
    .filter((word) => {
      if (!word) return false;

      if (word.length === 1) {
        return false;
      }

      if (word.length === 2 && word[0] !== word[0].toUpperCase()) {
        return false;
      }

      if (word.length === 3 && word[0] !== word[0].toUpperCase()) {
        return false;
      }

      if (blacklist.includes(word.toLowerCase())) {
        return false;
      }

      return true;
    })
    .filter(Boolean);

  const setHashtags = new Set(filteredTitle);
  const uniqueHashtags = Array.from(setHashtags);

  return uniqueHashtags;
}

export function filterPosts(
  hashtag: string | string[] | undefined,
  posts: Post[]
) {
  const regex = new RegExp(`${hashtag}`);
  return hashtag ? posts.filter((post) => regex.test(post.title)) : posts;
}

export function filterRelatedPosts(
  posts: Post[],
  postData: Post,
  postHashtags: string[]
) {
  const relatedPosts = posts.filter((post) => {
    if (post.id === postData.id) {
      return false;
    }
    const relatedTags = generateHashtags(post.title);
    return relatedTags.some((tag: string) => postHashtags.includes(tag));
  });

  return relatedPosts;
}

export function getPopularHashtags(posts: Post[]) {
  const freqMap: FreqMap = {};

  posts.forEach((post) => {
    const tags = generateHashtags(post.title);
    tags.forEach((tag) => {
      freqMap[tag] = (freqMap[tag] || 0) + 1;
    });
  });

  const popularHashtags: string[] = Object.entries(freqMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .map(({ tag }) => tag)
    .slice(0, 20);

  return popularHashtags;
}

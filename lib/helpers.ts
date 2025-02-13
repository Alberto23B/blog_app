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

      if (word.length === 1) return false;

      if (word.length === 2 && word[0] !== word[0].toUpperCase()) return false;

      if (blacklist.includes(word.toLowerCase())) return false;

      return true;
    })
    .filter(Boolean);

  const setHashtags = new Set(filteredTitle);
  const uniqueHashtags = Array.from(setHashtags);

  return uniqueHashtags;
}

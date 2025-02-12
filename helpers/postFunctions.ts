export function limitText(text: string, limit: number): string {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
}

export function capitalizeTitle(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

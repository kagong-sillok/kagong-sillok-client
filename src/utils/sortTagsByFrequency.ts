import type { PlaceCondition } from '@/types/place';

export function sortTagsByFrequency(Tags: PlaceCondition[]) {
  console.log(Tags);
  const tagCounts = new Map();

  const sortedTags = Tags.reduce<PlaceCondition[]>((result, item) => {
    const tagName = item.tagName;

    if (!tagCounts.has(tagName)) {
      tagCounts.set(tagName, 0);
      result.push(item);
    }

    tagCounts.set(tagName, tagCounts.get(tagName) + 1);

    return result;
  }, []).sort((a, b) => {
    return tagCounts.get(b.tagName) - tagCounts.get(a.tagName);
  });

  return sortedTags;
}

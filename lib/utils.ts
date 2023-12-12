import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Question } from "@/types";
import { nanoid } from "nanoid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTopTags = (questions: Question[]) => {
  const allTags = questions
    .flatMap((q) => q.tags)
    .filter((t) => t.label !== null)
    .map((t) => t.label);
  const tagCounts = {};
  allTags.forEach((tag) => {
    // @ts-ignore
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
  const tagArray = Object.keys(tagCounts).map((tag) => ({
    id: nanoid(),
    label: tag,
    // @ts-ignore
    count: tagCounts[tag],
  }));
  tagArray.sort((a, b) => b.count - a.count);
  const top5Tags = tagArray.slice(0, 5);
  return top5Tags;
};

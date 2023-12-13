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

export function getTimeStamp(date: Date): string {
  const now = new Date();
  const elapsed = now.getTime() - date.getTime();

  // Define the time units and their respective milliseconds
  const timeUnits = [
    { unit: "year", milliseconds: 365 * 24 * 60 * 60 * 1000 },
    { unit: "day", milliseconds: 24 * 60 * 60 * 1000 },
    { unit: "hour", milliseconds: 60 * 60 * 1000 },
    { unit: "minute", milliseconds: 60 * 1000 },
    { unit: "second", milliseconds: 1000 },
  ];

  // Find the appropriate time unit to display
  for (const unit of timeUnits) {
    const time = Math.floor(elapsed / unit.milliseconds);
    if (time >= 1) {
      return `${time} ${unit.unit}${time > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export function formatNumber(num: number): string {
  const suffixes = ["", "k", "M", "B", "T"];
  const suffixNum = Math.floor(("" + num).length / 3);
  const shortNum =
    Math.round((suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num) * 10) /
    10;
  return shortNum + suffixes[suffixNum];
}

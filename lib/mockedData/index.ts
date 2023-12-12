import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";
import type { Question, Answer, Tag } from "@/types";

const generateMockedAnswers = (): Answer[] => {
  const mockedAnswers = [];
  for (let i = 0; i < 10; i++) {
    mockedAnswers.push({
      id: nanoid(),
      answer: faker.lorem.sentence(),
      likes: faker.number.int({ min: 0, max: 300 }),
    });
  }
  return mockedAnswers;
};

const generateMockedTags = (): Tag[] => {
  const tags = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "StoryBook",
    "React Testing Library",
    "Jest",
    "Cypress",
    "GraphQL",
    "REST",
  ];

  const mockedTags: Tag[] = [];
  const checkExistingTag = (tag: string) => {
    if (mockedTags.map((t) => t.label).find((t) => t === tag)) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < 5; i++) {
    mockedTags.push({
      id: nanoid(),
      label: checkExistingTag(tags[Math.floor(Math.random() * tags.length)])
        ? null
        : tags[Math.floor(Math.random() * tags.length)],
    });
  }
  return mockedTags;
};

const generateMockedQuestions = (): Question[] => {
  const mockedQuestions = [];
  for (let i = 0; i < 30; i++) {
    mockedQuestions.push({
      id: nanoid(),
      question: faker.lorem.sentence() + "?",
      answers: generateMockedAnswers(),
      tags: generateMockedTags(),
      views: faker.number.int({ min: 0, max: 1000 }),
      likes: faker.number.int({ min: 0, max: 300 }),
    });
  }
  return mockedQuestions;
};

export const mockedQuestions = generateMockedQuestions();

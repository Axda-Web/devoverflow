import { cn /* getTopTags */ } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { mockedQuestions } from "@/lib/mockedData";
// import type { Tag } from "@/types";

import { RenderTag } from "./RenderTag";

const hotQuestions = [
  {
    _id: "1",
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: "2",
    title: "How can an airconditioning machine exist?",
  },
  {
    _id: "3",
    title: "Interrogated every time crossing UK Border as citizen",
  },
  {
    _id: "4",
    title: "Low digit addition generator",
  },
  {
    _id: "5",
    title: "What is an example of 3 numbers that do not make up a vector?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "react",
    totalQuestions: 5,
  },
  {
    _id: "3",
    name: "next",
    totalQuestions: 5,
  },
  {
    _id: "4",
    name: "vue",
    totalQuestions: 2,
  },
  {
    _id: "5",
    name: "redux",
    totalQuestions: 10,
  },
];

const QuestionCard = ({ question, id }: { question: string; id: string }) => {
  return (
    <Link
      href={`/questions/${id}`}
      className="flex cursor-pointer items-center justify-between gap-7"
    >
      <p className="body-medium text-dark500_light700">{question}</p>
      <Image
        src="/assets/icons/chevron-right.svg"
        width={20}
        height={20}
        alt="arrow right icon"
        className="invert-colors"
      />
    </Link>
  );
};

export const RightSidebar = () => {
  // const topQuestions = [...mockedQuestions]
  //   .sort((a, b) => b.likes - a.likes)
  //   .slice(0, 5);
  // const topTags = getTopTags(mockedQuestions);

  return (
    <section
      className={cn(
        "background-light900_dark200 ligth-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 w-[350px]",
        "dark:shadow-none",
        "max-xl:hidden"
      )}
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question.title}
              id={question._id}
            />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

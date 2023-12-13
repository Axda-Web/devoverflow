import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { LocalSearchBar } from "@/components/shared/search/LocalSearchBar";
import { Filter } from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import { HomeFilters } from "@/components/home/HomeFilters";
import { QuestionCard } from "@/components/home/QuestionCard";
import { NotResult } from "@/components/shared/NotResult";

const mockedQuestions = [
  {
    _id: "1",
    title: "How to use React Hooks?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Hooks" },
    ],
    author: { _id: "1", name: "John Doe", picture: "react.png" },
    upvotes: 5200000000,
    views: 1000000,
    answers: [],
    createdAt: new Date("2023-12-01"),
  },
  {
    _id: "2",
    title: "What is the difference between var, let, and const?",
    tags: [{ _id: "3", name: "JavaScript" }],
    author: { _id: "2", name: "Jane Smith", picture: "react.png" },
    upvotes: 20,
    views: 100,
    answers: [],
    createdAt: new Date("2021-02-01"),
  },
  {
    _id: "3",
    title: "How to query a MongoDB database using Mongoose?",
    tags: [
      { _id: "4", name: "MongoDB" },
      { _id: "5", name: "Mongoose" },
    ],
    author: { _id: "3", name: "Alice Johnson", picture: "react.png" },
    upvotes: 5,
    views: 30,
    answers: [],
    createdAt: new Date("2021-03-01"),
  },
  {
    _id: "4",
    title: "What are the best practices for writing clean code?",
    tags: [{ _id: "6", name: "Coding" }],
    author: { _id: "4", name: "Bob Anderson", picture: "react.png" },
    upvotes: 15,
    views: 80,
    answers: [],
    createdAt: new Date("2021-04-01"),
  },
  {
    _id: "5",
    title: "How to implement authentication in a Node.js app?",
    tags: [
      { _id: "7", name: "Node.js" },
      { _id: "8", name: "Authentication" },
    ],
    author: { _id: "5", name: "Sarah Wilson", picture: "react.png" },
    upvotes: 8,
    views: 40,
    answers: [],
    createdAt: new Date("2021-05-01"),
  },
  {
    _id: "6",
    title:
      "What is the difference between synchronous and asynchronous programming?",
    tags: [{ _id: "9", name: "Programming" }],
    author: { _id: "6", name: "Michael Brown", picture: "react.png" },
    upvotes: 12,
    views: 60,
    answers: [],
    createdAt: new Date("2021-06-01"),
  },
  {
    _id: "7",
    title: "How to optimize SQL queries for better performance?",
    tags: [{ _id: "10", name: "SQL" }],
    author: { _id: "7", name: "Jennifer Davis", picture: "react.png" },
    upvotes: 6,
    views: 35,
    answers: [],
    createdAt: new Date("2021-07-01"),
  },
];

export default function Home() {
  return (
    <>
      <div
        className={cn(
          "flex w-full flex-col-reverse justify-between gap-4",
          "sm:flex-row sm:items-center"
        )}
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href="/ask-question"
          className={cn("flex justify-end", "max-sm:w-full")}
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div
        className={cn(
          "mt-11 flex justify-between gap-5",
          "max-sm:flex-col",
          "sm:items-center"
        )}
      >
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search globally"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={cn("min-h-[56px]", "sm:min-w-[170px]")}
          containerClasses={cn("hidden", "max-md:flex")}
        />
      </div>
      <HomeFilters />
      <main className="mt-10 flex w-full flex-col gap-6">
        {mockedQuestions?.length > 0 ? (
          mockedQuestions.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))
        ) : (
          <NotResult
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
                        discussion. our query could be the next big thing others learn from. Get
                        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </main>
    </>
  );
}

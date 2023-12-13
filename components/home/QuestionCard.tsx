import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, getTimeStamp, formatNumber } from "@/lib/utils";
import Link from "next/link";

import { RenderTag } from "../shared/RenderTag";
import { Metric } from "../shared/Metric";

type Author = {
  _id: string;
  name: string;
  picture: string;
};

type Tag = {
  _id: string;
  name: string;
};

type QuestionCardProps = {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  upvotes: number;
  views: number;
  answers: object[];
  createdAt: Date;
};

export const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return (
    <Card className={cn("card-wrapper rounded-[10px] p-9", "sm:px-11")}>
      <CardHeader
        className={cn(
          "flex flex-col-reverse items-start justify-between gap-5",
          "sm:flex-row"
        )}
      >
        <div>
          <span
            className={cn(
              "subtle-regular text-dark400_light700 line-clamp-1 flex",
              "sm:hidden"
            )}
          >
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <CardTitle
              className={cn(
                "base-semibold text-dark200_light900 line-clamp-1 flex-1",
                "sm:h3-semibold"
              )}
            >
              {title}
            </CardTitle>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} {...tag} />
        ))}
      </CardContent>
      <CardFooter className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={` - asked ${getTimeStamp(createdAt)}`}
          href={`/profile/${author._id}`}
          textStyles="body-medium text-dark400_light800"
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(answers.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </CardFooter>
    </Card>
  );
};

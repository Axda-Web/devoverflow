import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type MetricProps = {
  imgUrl: string;
  alt: string;
  value: number | string;
  href?: string;
  title?: string;
  textStyles?: string;
  isAuthor?: boolean;
};

export const Metric = ({
  imgUrl,
  alt,
  value,
  href,
  title,
  textStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={cn("object-contain", {
          "rounded-full": href,
        })}
      />
      <p className={cn("flex items-center gap-1", textStyles)}>
        {value}
        <span
          className={cn("small-regular line-clamp-1", {
            "max-sm:hidden": isAuthor,
          })}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

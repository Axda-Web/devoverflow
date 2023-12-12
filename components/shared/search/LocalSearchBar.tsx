"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LocalSearchBarProps = {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  otherClasses?: string;
  placeholder?: string;
};

export const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  otherClasses,
  placeholder,
}: LocalSearchBarProps) => {
  return (
    <div
      className={cn(
        "background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4",
        otherClasses
      )}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
      )}
      <Input
        type="search"
        placeholder={placeholder}
        defaultValue=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

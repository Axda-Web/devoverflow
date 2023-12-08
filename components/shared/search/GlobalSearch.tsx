import clsx from "clsx";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export const GlobalSearch = () => {
  return (
    <div className={clsx("relative w-full max-w-[600px]", "max-lg:hidden")}>
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
        <Input
          type="search"
          placeholder="Search globally"
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FilterType = {
  name: string;
  value: string;
};

type FilterProps = {
  filters: FilterType[];
  otherClasses?: string;
  containerClasses?: string;
};
export const Filter = ({
  filters,
  otherClasses,
  containerClasses,
}: FilterProps) => {
  return (
    <div className={cn("relative", containerClasses)}>
      <Select>
        <SelectTrigger
          className={cn(
            "body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5",
            otherClasses
          )}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem
                className="capitalize"
                key={item.value}
                value={item.value}
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

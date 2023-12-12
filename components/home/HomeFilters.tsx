"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { HomePageFilters } from "@/constants/filters";

export const HomeFilters = () => {
  const active = "frequent";
  return (
    <div className={cn("hidden mt-10 flex-wrap gap-3", "md:flex")}>
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            {
              "bg-primary-100 text-primary-500": active === item.value,
              "bg-light-800 text-light-500": active !== item.value,
            }
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

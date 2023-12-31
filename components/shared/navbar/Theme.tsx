"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { useTheme } from "@/context/ThemeProvider";
import { themes } from "@/constants";

export const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className={cn(
            "focus:bg-light-900 data-[state=open]:bg-light-900",
            "dark:foucus:bg-dark-200 dark:data-[state=open]:bg-dark-200"
          )}
        >
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun icon"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon icon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className={cn(
            "absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2",
            "dark:border-dark-400 dark:bg-dark-300"
          )}
        >
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className={cn(
                "flex items-center gap-4 px-2.5 py-2",
                "dark:focus:bg-dark-400"
              )}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={cn({
                  "active-theme": mode === item.value,
                })}
              />
              <p
                className={cn("body-semibold text-light-500", {
                  "text-primary-500": mode === item.value,
                  "text-dark100_light900": mode !== item.value,
                })}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

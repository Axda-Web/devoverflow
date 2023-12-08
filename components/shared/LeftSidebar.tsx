"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

import { sidebarLinks } from "@/constants";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          item.route === pathname;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={cn(
              "flex items-center justify-start gap-4 bg-transparent p-4",
              {
                "primary-gradient rounded-lg text-light-900": isActive,
                "text-dark300_light900": !isActive,
              }
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                "max-lg:hidden",
                { "base-bold": isActive },
                { "base-medium": !isActive }
              )}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export const LeftSidebar = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <section
      className={cn(
        "background-light900_dark200 ligth-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300",
        "dark:shadow-none",
        "max-sm:hidden",
        "lg:w-[266px]"
      )}
    >
      <NavContent />
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login icon"
                width={20}
                height={20}
                className={cn("invert-colors", "lg:hidden")}
              />
              <span className={cn("primary-text-gradient", "max-lg:hidden")}>
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up icon"
                width={20}
                height={20}
                className={cn("invert-colors", "lg:hidden")}
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <Button
          onClick={() => signOut(() => router.push("/"))}
          className="flex items-center justify-start gap-4 bg-transparent p-4"
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt="logout icon"
            width={20}
            height={20}
            className="invert-colors"
          />
          <p className="base-medium">Log Out</p>
        </Button>
      </SignedIn>
    </section>
  );
};

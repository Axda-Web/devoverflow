import React from "react";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn("flex min-h-screen w-full items-center justify-center")}
    >
      {children}
    </main>
  );
}

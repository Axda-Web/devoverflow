import React from "react";
import clsx from "clsx";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={clsx("flex min-h-screen w-full items-center justify-center")}
    >
      {children}
    </main>
  );
}

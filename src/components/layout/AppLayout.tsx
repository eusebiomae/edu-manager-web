"use client";

import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import clsx from "clsx";

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {

  return (
    <div className="min-h-screen bg-background md:flex">
      <Sidebar />

      <div className={clsx("transition-all duration-300 flex-1")}>
        <Topbar />

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

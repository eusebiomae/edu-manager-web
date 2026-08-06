"use client";

import { Bell, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./UserMenu";
import { ThemeToggle } from "./ThemeToggle";
import { useSidebar } from "@/context/sidebar-context";

export function Topbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-20 items-center justify-between border-b bg-card px-8">
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <PanelLeft size={20} />
      </Button>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <Button variant="ghost" size="icon">
          <Bell size={20} />
        </Button>

        <UserMenu />
      </div>
    </header>
  );
}

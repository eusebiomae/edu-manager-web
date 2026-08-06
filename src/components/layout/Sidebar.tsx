"use client";

import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";

import { useSidebar } from "@/context/sidebar-context";
import clsx from "clsx";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

export function Sidebar() {
  const { collapsed, mobileOpen, closeMobile } = useSidebar();

  return (
    <>
      {mobileOpen && (

          <div
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />

      )}

      <aside
          className={clsx(

              "border-r bg-card transition-all duration-300",

              "md:relative",

              "fixed left-0 top-0 z-50 h-screen",

              mobileOpen
                  ? "translate-x-0"
                  : "-translate-x-full md:translate-x-0",

              collapsed
                  ? "md:w-20"
                  : "md:w-64",

              "w-64"

          )}
      >
        <div className="flex items-center justify-center h-16">
          {collapsed ? <span className="text-2xl font-bold">E</span> : <Logo />}
        </div>

        <nav className="flex flex-1 flex-col gap-2 px-4">
          <NavItem href="/dashboard" label="Dashboard" icon={LayoutDashboard} />

          <NavItem href="/alunos" label="Alunos" icon={GraduationCap} />

          <NavItem href="/cursos" label="Cursos" icon={BookOpen} />

          <NavItem href="/professores" label="Professores" icon={Users} />
        </nav>

        <div className="border-t p-4">
          <NavItem href="/configuracoes" label="Configurações" icon={Settings} />
        </div>
      </aside>
    </>
  );
}

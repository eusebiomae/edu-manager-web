'use client';

import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Settings,
} from 'lucide-react';

import { Logo } from './Logo';
import { NavItem } from './NavItem';

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-card">

      <Logo />

      <nav className="flex flex-1 flex-col gap-2 px-4">

        <NavItem
          href="/dashboard"
          label="Dashboard"
          icon={LayoutDashboard}
        />

        <NavItem
          href="/alunos"
          label="Alunos"
          icon={GraduationCap}
        />

        <NavItem
          href="/cursos"
          label="Cursos"
          icon={BookOpen}
        />

        <NavItem
          href="/professores"
          label="Professores"
          icon={Users}
        />

      </nav>

      <div className="border-t p-4">

        <NavItem
          href="/configuracoes"
          label="Configurações"
          icon={Settings}
        />

      </div>

    </aside>
  );
}

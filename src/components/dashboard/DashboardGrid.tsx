"use client";

import { GraduationCap, Users, BookOpen, ClipboardList } from "lucide-react";

import { DashboardCard } from "./DashboardCard";
import { useAlunos } from "@/hooks/useAlunos";

export function DashboardGrid() {
  const { data: alunos, isLoading } = useAlunos();
  const totalAlunos = alunos?.length ?? 0;

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <DashboardCard
        title="Total de Alunos"
        value={isLoading ? "..." : totalAlunos}
        icon={GraduationCap}
      />

      <DashboardCard
        title="Professores"
        value={0}
        icon={Users}
        color="bg-success"
      />

      <DashboardCard
        title="Cursos"
        value={0}
        icon={BookOpen}
        color="bg-warning"
      />

      <DashboardCard
        title="Matrículas"
        value={0}
        icon={ClipboardList}
        color="bg-info"
      />
    </section>
  );
}

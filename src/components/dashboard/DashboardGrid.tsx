import {
  GraduationCap,
  Users,
  BookOpen,
  ClipboardList,
} from "lucide-react";

import { DashboardCard } from "./DashboardCard";

export function DashboardGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <DashboardCard
        title="Total de Alunos"
        value={0}
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

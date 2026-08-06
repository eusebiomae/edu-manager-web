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
        value={328}
        icon={GraduationCap}
      />

      <DashboardCard
        title="Professores"
        value={27}
        icon={Users}
        color="bg-success"
      />

      <DashboardCard
        title="Cursos"
        value={14}
        icon={BookOpen}
        color="bg-warning"
      />

      <DashboardCard
        title="Matrículas"
        value={521}
        icon={ClipboardList}
        color="bg-info"
      />

    </section>
  );
}

import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color?: string;
}

export function DashboardCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-600",
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-foreground">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color} text-white`}
        >
          <Icon size={28} />
        </div>

      </div>

    </div>
  );
}

import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <WelcomeCard />

      <DashboardGrid />

    </div>
  );
}

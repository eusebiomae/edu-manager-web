import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3 px-4 py-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
        <GraduationCap size={24} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-foreground">
          EduManager
        </h1>

        <p className="text-xs text-muted">
          ERP Escolar
        </p>
      </div>
    </div>
  );
}

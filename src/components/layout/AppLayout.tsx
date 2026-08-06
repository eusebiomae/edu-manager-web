import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

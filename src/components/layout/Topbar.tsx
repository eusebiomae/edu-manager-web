import { Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserMenu } from './UserMenu';

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-card px-8">

      <div className="relative w-96">

        <Search
          className="absolute left-3 top-3 text-muted"
          size={18}
        />

        <Input
          placeholder="Pesquisar..."
          className="pl-10"
        />

      </div>

      <div className="flex items-center gap-5">

        <Button variant="ghost" size="icon">
          <Bell size={20} />
        </Button>

        <UserMenu />

      </div>

    </header>
  );
}
